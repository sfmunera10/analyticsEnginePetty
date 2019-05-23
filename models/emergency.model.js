const filename = '../data/emergencies.json'
let emergenciesJSON = require(filename)
const filenameToWrite = './data/emergencies.json'
const fs = require('fs')
const axios = require("axios")


let emergenciesPromise = axios.get("https://firestore.googleapis.com/v1beta1/projects/petty-test/databases/(default)/documents/urgencias");

//retrieve from Firebase
function retrieveEmergencies(){
    emergenciesJSON = []
    writeJSONFile(filenameToWrite, emergenciesJSON)
    return new Promise((resolve, reject) => {
        axios.all([emergenciesPromise])
        .then(axios.spread(function (emergencies) {

        let emergenciesCollection = emergencies.data;

        for(let i of emergenciesCollection.documents){
            let j = i.fields
            const newID = getNewId(emergenciesJSON)
            emergenciesJSON.push({"id":newID,
                "description":j.description.stringValue, 
                "xLongitude":j.x.doubleValue,
                "yLatitude":j.x.doubleValue,
                "timestamp":i.createTime
            })
        }
        writeJSONFile(filenameToWrite, emergenciesJSON)

        if (emergenciesJSON.length === 0) {
            reject({
                message: 'no emergencies available',
                status: 202
            })
        }

        resolve(emergenciesJSON)

        })).catch((err) => {
        console.log(err);
        });
    })
}

//GET ALL PETS
function getEmergencies(){
	return new Promise((resolve, reject) => {
        if (emergenciesJSON.length === 0) {
            reject({
                message: 'no emergencies available',
                status: 202
            })
        }

        resolve(emergenciesJSON)
    })
}

//GET SINGLE PET BY ID
function getEmergencyById(id) {
    return new Promise((resolve, reject) => {
        mustBeInArray(emergenciesJSON, id)
        .then(emergency => resolve(emergency))
        .catch(err => reject(err))
    })
}

//CREATE SINGLE PET
function createEmergency(newAch) {
    return new Promise((resolve, reject) => {
        const newID = getNewId(emergenciesJSON) 
        newAch.id = newID
        emergenciesJSON.push(newAch)
        writeJSONFile(filenameToWrite, emergenciesJSON)
        resolve(newAch)
    })
}

//UPDATE SINGLE PET
function updateEmergency(id, newAch) {
    return new Promise((resolve, reject) => {
        mustBeInArray(emergenciesJSON, id)
        .then(emergency => {
            emergency.name = newAch.name
            emergency.description = newAch.description
            emergency.logoURL = newAch.logoURL
            emergency.isReward = newAch.isReward
            writeJSONFile(filenameToWrite, emergenciesJSON)
            resolve(emergency)
        })
        .catch(err => reject(err))
    })
}

//DELETE SINGLE PET
function deleteEmergency(id) {
    return new Promise((resolve, reject) => {
        mustBeInArray(emergenciesJSON, id)
        .then(() => {
            emergenciesJSON = emergenciesJSON.filter(p => p.id != id)
            rearrangeIDs(emergenciesJSON)
            writeJSONFile(filenameToWrite, emergenciesJSON)
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
    retrieveEmergencies,
    getEmergencies,
    getEmergencyById,
    createEmergency,
    updateEmergency,
    deleteEmergency
}