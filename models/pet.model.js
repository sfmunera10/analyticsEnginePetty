const filename = '../data/pets.json'
let petsJSON = require(filename)
const filenameToWrite = './data/pets.json'
const fs = require('fs')
const axios = require("axios")


let petsPromise = axios.get("https://firestore.googleapis.com/v1beta1/projects/petty-test/databases/(default)/documents/mascotas");

//retrieve from Firebase
function retrievePets(){
    petsJSON = []
    writeJSONFile(filenameToWrite, petsJSON)
    return new Promise((resolve, reject) => {
        axios.all([petsPromise])
        .then(axios.spread(function (pets) {

        let petsCollection = pets.data;

        for(let i of petsCollection.documents){
            let j = i.fields
            const newID = getNewId(petsJSON)
            petsJSON.push({"id":newID,
                "weight":j.weight.integerValue, 
                "race":j.race.stringValue,
                "imageFileName":j.imageFileName.stringValue,
                "age":j.age.integerValue,
                "urlImage":j.urlImage.stringValue,
                "name":j.name.stringValue,
                "timestamp":i.createTime
            })
        }
        writeJSONFile(filenameToWrite, petsJSON)

        if (petsJSON.length === 0) {
            reject({
                message: 'no pets available',
                status: 202
            })
        }

        resolve(petsJSON)

        })).catch((err) => {
        console.log(err);
        });
    })
}

//GET ALL PETS
function getPets(){
	return new Promise((resolve, reject) => {
        if (petsJSON.length === 0) {
            reject({
                message: 'no pets available',
                status: 202
            })
        }

        resolve(petsJSON)
    })
}

//GET SINGLE PET BY ID
function getPetById(id) {
    return new Promise((resolve, reject) => {
        mustBeInArray(petsJSON, id)
        .then(pet => resolve(pet))
        .catch(err => reject(err))
    })
}

//CREATE SINGLE PET
function createPet(newAch) {
    return new Promise((resolve, reject) => {
        const newID = getNewId(petsJSON) 
        newAch.id = newID
        petsJSON.push(newAch)
        writeJSONFile(filenameToWrite, petsJSON)
        resolve(newAch)
    })
}

//UPDATE SINGLE PET
function updatePet(id, newAch) {
    return new Promise((resolve, reject) => {
        mustBeInArray(petsJSON, id)
        .then(pet => {
            pet.name = newAch.name
            pet.description = newAch.description
            pet.logoURL = newAch.logoURL
            pet.isReward = newAch.isReward
            writeJSONFile(filenameToWrite, petsJSON)
            resolve(pet)
        })
        .catch(err => reject(err))
    })
}

//DELETE SINGLE PET
function deletePet(id) {
    return new Promise((resolve, reject) => {
        mustBeInArray(petsJSON, id)
        .then(() => {
            petsJSON = petsJSON.filter(p => p.id != id)
            rearrangeIDs(petsJSON)
            writeJSONFile(filenameToWrite, petsJSON)
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
    retrievePets,
    getPets,
    getPetById,
    createPet,
    updatePet,
    deletePet
}