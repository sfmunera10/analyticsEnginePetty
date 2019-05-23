const filename = '../data/products.json'
let productsJSON = require(filename)
const filenameToWrite = './data/products.json'
const fs = require('fs')
const axios = require("axios")


let productsPromise = axios.get("https://firestore.googleapis.com/v1beta1/projects/petty-test/databases/(default)/documents/productos");

//retrieve from Firebase
function retrieveProducts(){
    productsJSON = []
    writeJSONFile(filenameToWrite, productsJSON)
    return new Promise((resolve, reject) => {
        axios.all([productsPromise])
        .then(axios.spread(function (products) {

        let productsCollection = products.data;

        for(let i of productsCollection.documents){
            let j = i.fields
            const newID = getNewId(productsJSON)
            productsJSON.push({"id":newID,
                "url":j.url.stringValue,
                "name":j.name.stringValue, 
                "vet":j.vet.stringValue,
                "type":j.type.stringValue,
                "price":j.price.doubleValue,
                "imageFileName":j.imageFileName.stringValue,
                "timestamp":i.createTime
            })
        }
        writeJSONFile(filenameToWrite, productsJSON)

        if (productsJSON.length === 0) {
            reject({
                message: 'no products available',
                status: 202
            })
        }

        resolve(productsJSON)

        })).catch((err) => {
        console.log(err);
        });
    })
}

//GET ALL PETS
function getProducts(){
    return new Promise((resolve, reject) => {
        if (productsJSON.length === 0) {
            reject({
                message: 'no products available',
                status: 202
            })
        }

        resolve(productsJSON)
    })
}

//GET SINGLE PET BY ID
function getProductById(id) {
    return new Promise((resolve, reject) => {
        mustBeInArray(productsJSON, id)
        .then(product => resolve(product))
        .catch(err => reject(err))
    })
}

//CREATE SINGLE PET
function createProduct(newAch) {
    return new Promise((resolve, reject) => {
        const newID = getNewId(productsJSON) 
        newAch.id = newID
        productsJSON.push(newAch)
        writeJSONFile(filenameToWrite, productsJSON)
        resolve(newAch)
    })
}

//UPDATE SINGLE PET
function updateProduct(id, newAch) {
    return new Promise((resolve, reject) => {
        mustBeInArray(productsJSON, id)
        .then(product => {
            product.name = newAch.name
            product.description = newAch.description
            product.logoURL = newAch.logoURL
            product.isReward = newAch.isReward
            writeJSONFile(filenameToWrite, productsJSON)
            resolve(product)
        })
        .catch(err => reject(err))
    })
}

//DELETE SINGLE PET
function deleteProduct(id) {
    return new Promise((resolve, reject) => {
        mustBeInArray(productsJSON, id)
        .then(() => {
            productsJSON = productsJSON.filter(p => p.id != id)
            rearrangeIDs(productsJSON)
            writeJSONFile(filenameToWrite, productsJSON)
            resolve()
        })
        .catch(err => reject(err))
    })
}

//USEFUL FUNCTIONS ---------------------------------------------------------------

const getNewId = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
}

const newDate = () => new Date().toString()

function mustBeInArray(array, id){
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.id == id)
        if (!row) {
            reject({
                message: 'ID is not good',
                status: 404
            })
        }
        resolve(row)
    })
}

function rearrangeIDs(array){
    let count = 1;
    for(let i of array){
        i.id = count;
        count++;
    }
}

function writeJSONFile(filename, content) {
    fs.writeFile(filename, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}


//EXPORTS THAT WILL BE USED IN EXPRESS ROUTING-----------------------------------------------
module.exports = {
    retrieveProducts,
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}