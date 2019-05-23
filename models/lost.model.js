const filename = '../data/lost.json'
let lostsJSON = require(filename)
const filenameToWrite = './data/lost.json'
const fs = require('fs')
const axios = require("axios")


let lostsPromise = axios.get("https://firestore.googleapis.com/v1beta1/projects/petty-test/databases/(default)/documents/perdidas");

//retrieve from Firebase
function retrieveLosts(){
    lostsJSON = []
    writeJSONFile(filenameToWrite, lostsJSON)
    return new Promise((resolve, reject) => {
        axios.all([lostsPromise])
        .then(axios.spread(function (losts) {

        let lostsCollection = losts.data;

        for(let i of lostsCollection.documents){
            let j = i.fields
            const newID = getNewId(lostsJSON)
            lostsJSON.push({"id":newID,
                "weight":j.weight.integerValue, 
                "race":j.race.stringValue,
                "imageFileName":j.imageFileName.stringValue,
                "age":j.age.integerValue,
                "urlImage":j.urlImage.stringValue,
                "name":j.name.stringValue,
                "xLongitude":j.x.doubleValue,
                "yLatitude":j.y.doubleValue,
                "timestamp":i.createTime
            })
        }
        writeJSONFile(filenameToWrite, lostsJSON)

        if (lostsJSON.length === 0) {
            reject({
                message: 'no losts available',
                status: 202
            })
        }

        resolve(lostsJSON)

        })).catch((err) => {
        console.log(err);
        });
    })
}

//GET ALL PETS
function getLosts(){
    return new Promise((resolve, reject) => {
        if (lostsJSON.length === 0) {
            reject({
                message: 'no losts available',
                status: 202
            })
        }

        resolve(lostsJSON)
    })
}

//GET SINGLE PET BY ID
function getLostById(id) {
    return new Promise((resolve, reject) => {
        mustBeInArray(lostsJSON, id)
        .then(lost => resolve(lost))
        .catch(err => reject(err))
    })
}

//CREATE SINGLE PET
function createLost(newAch) {
    return new Promise((resolve, reject) => {
        const newID = getNewId(lostsJSON) 
        newAch.id = newID
        lostsJSON.push(newAch)
        writeJSONFile(filenameToWrite, lostsJSON)
        resolve(newAch)
    })
}

//UPDATE SINGLE PET
function updateLost(id, newAch) {
    return new Promise((resolve, reject) => {
        mustBeInArray(lostsJSON, id)
        .then(lost => {
            lost.name = newAch.name
            lost.description = newAch.description
            lost.logoURL = newAch.logoURL
            lost.isReward = newAch.isReward
            writeJSONFile(filenameToWrite, lostsJSON)
            resolve(lost)
        })
        .catch(err => reject(err))
    })
}

//DELETE SINGLE PET
function deleteLost(id) {
    return new Promise((resolve, reject) => {
        mustBeInArray(lostsJSON, id)
        .then(() => {
            lostsJSON = lostsJSON.filter(p => p.id != id)
            rearrangeIDs(lostsJSON)
            writeJSONFile(filenameToWrite, lostsJSON)
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
    retrieveLosts,
    getLosts,
    getLostById,
    createLost,
    updateLost,
    deleteLost
}