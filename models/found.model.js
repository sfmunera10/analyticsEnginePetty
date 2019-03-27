const filename = '../data/found.json'
let foundsJSON = require(filename)
const filenameToWrite = './data/found.json'
const fs = require('fs')
const axios = require("axios")


let foundsPromise = axios.get("https://firestore.googleapis.com/v1beta1/projects/petty-test/databases/(default)/documents/encontradas");

//retrieve from Firebase
function retrieveFounds(){
    foundsJSON = []
    writeJSONFile(filenameToWrite, foundsJSON)
    return new Promise((resolve, reject) => {
        axios.all([foundsPromise])
        .then(axios.spread(function (founds) {

        let foundsCollection = founds.data;

        for(let i of foundsCollection.documents){
            let j = i.fields
            const newID = getNewId(foundsJSON)
            foundsJSON.push({"id":newID,
                "description":j.description.stringValue,
                "urlImage":j.urlImage.stringValue,
                "xLongitude":j.x.doubleValue,
                "yLatitude":j.y.doubleValue
            })
        }
        writeJSONFile(filenameToWrite, foundsJSON)

        if (foundsJSON.length === 0) {
            reject({
                message: 'no founds available',
                status: 202
            })
        }

        resolve(foundsJSON)

        })).catch((err) => {
        console.log(err);
        });
    })
}

//GET ALL PETS
function getFounds(){
    return new Promise((resolve, reject) => {
        if (foundsJSON.length === 0) {
            reject({
                message: 'no founds available',
                status: 202
            })
        }

        resolve(foundsJSON)
    })
}

//GET SINGLE PET BY ID
function getFoundById(id) {
    return new Promise((resolve, reject) => {
        mustBeInArray(foundsJSON, id)
        .then(found => resolve(found))
        .catch(err => reject(err))
    })
}

//CREATE SINGLE PET
function createFound(newAch) {
    return new Promise((resolve, reject) => {
        const newID = getNewId(foundsJSON) 
        newAch.id = newID
        foundsJSON.push(newAch)
        writeJSONFile(filenameToWrite, foundsJSON)
        resolve(newAch)
    })
}

//UPDATE SINGLE PET
function updateFound(id, newAch) {
    return new Promise((resolve, reject) => {
        mustBeInArray(foundsJSON, id)
        .then(found => {
            found.name = newAch.name
            found.description = newAch.description
            found.logoURL = newAch.logoURL
            found.isReward = newAch.isReward
            writeJSONFile(filenameToWrite, foundsJSON)
            resolve(found)
        })
        .catch(err => reject(err))
    })
}

//DELETE SINGLE PET
function deleteFound(id) {
    return new Promise((resolve, reject) => {
        mustBeInArray(foundsJSON, id)
        .then(() => {
            foundsJSON = foundsJSON.filter(p => p.id != id)
            rearrangeIDs(foundsJSON)
            writeJSONFile(filenameToWrite, foundsJSON)
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
    retrieveFounds,
    getFounds,
    getFoundById,
    createFound,
    updateFound,
    deleteFound
}