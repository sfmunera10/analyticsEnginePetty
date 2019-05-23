const emergencyModel = require('./emergency.model')
const foundModel = require('./found.model')
const lostModel = require('./lost.model')
const petModel = require('./pet.model')
const productsModel = require('./product.model')

/*
Pregunta 1: ¿Cuáles son las horas y los días de la semana en los que más se solicitan urgencias veterinarias?
*/
function question1(){
    return new Promise((resolve, reject) => {
        Promise.all([emergencyModel.retrieveEmergencies()]).then(value =>{
            let arrayValue = value[0]
            let dataCells = [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ]
            for(let i of arrayValue){
                let days = new Date(i.timestamp).getDay()
                let hours = new Date(i.timestamp).getHours()
                for(let i = 0; i < 24; i++){
                    if(days === 0){
                        if(hours === i){
                            dataCells[0][i]++;
                        }
                    }
                    else if(days === 1){
                        if(hours === i){
                            dataCells[1][i]++;
                        }
                    }
                    else if(days === 2){
                        if(hours === i){
                            dataCells[2][i]++;
                        }
                    }
                    else if(days === 3){
                        if(hours === i){
                            dataCells[3][i]++;
                        }
                    }
                    else if(days === 4){
                        if(hours === i){
                            dataCells[4][i]++;
                        }
                    }
                    else if(days === 5){
                        if(hours === i){
                            dataCells[5][i]++;
                        }
                    }
                    else if(days === 6){
                        if(hours === i){
                            dataCells[6][i]++;
                        }
                    }
                }
            }
            resolve(dataCells)
        }).catch((err) => {console.log(err);});
    })
}

/*
    Pregunta 2: ¿Cuáles son las horas en las que más 
    se solicitan urgencias veterinarias?
*/
function question2(){
    return new Promise((resolve, reject) => {
        Promise.all([emergencyModel.retrieveEmergencies()]).then(value =>{
            let arrayValue = value[0]
            let answer = {pregunta: `¿Cuáles son las horas en las que más se solicitan urgencias veterinarias?`, 
                respuesta:[]}
            for(let i of arrayValue){
                let days = new Date(i.timestamp).getDay()
                let hours = new Date(i.timestamp).getHours()
                answer.respuesta.push({
                    hora: hours + "HRS"
                })
            }
            if (arrayValue.length === 0) {
                reject({
                    message: 'no products available',
                    status: 202
                })
            }
            resolve(answer)
        }).catch((err) => {console.log(err);});
    })
}

/*
    Pregunta 3: ¿Cuáles son los días de la semana en 
    los que más se solicitan urgencias veterinarias?
*/
function question3(){
    return new Promise((resolve, reject) => {
        Promise.all([emergencyModel.retrieveEmergencies()]).then(value =>{
            let arrayValue = value[0]
            let answer = {pregunta: `¿Cuáles son los días de la semana en los que más se solicitan urgencias veterinarias?`, 
                respuesta:[]}
            for(let i of arrayValue){
                let days = new Date(i.timestamp).getDay()
                if(days === 0){
                    answer.respuesta.push({
                        Día: "Domingo"
                    })
                }
                else if(days === 1){
                    answer.respuesta.push({
                        Día: "Lunes"
                    })
                }
                else if(days === 2){
                    answer.respuesta.push({
                        Día: "Martes"
                    })
                }
                else if(days === 3){
                    answer.respuesta.push({
                        Día: "Miércoles"
                    })
                }
                else if(days === 4){
                    answer.respuesta.push({
                        Día: "Jueves"
                    })
                }
                else if(days === 5){
                    answer.respuesta.push({
                        Día: "Viernes"
                    })
                }
                else if(days === 6){
                    answer.respuesta.push({
                        Día: "Sábado"
                    })
                }
            }
            if (arrayValue.length === 0) {
                reject({
                    message: 'no products available',
                    status: 202
                })
            }
            resolve(answer)
        }).catch((err) => {console.log(err);});
    })
}

/*
    Pregunta 4: ¿Cuáles son los problemas de salud 
    más frecuentes en las mascotas?
*/
function question4(){
    return new Promise((resolve, reject) => {
        Promise.all([emergencyModel.retrieveEmergencies()]).then(value =>{
            let arrayValue = value[0]
            let answer = {pregunta: `¿Cuáles son los problemas de salud más frecuentes en las mascotas?`, 
                respuesta:[]}
            for(let i of arrayValue){
                answer.respuesta.push({
                    problema: i.description
                })
            }
            if (arrayValue.length === 0) {
                reject({
                    message: 'no products available',
                    status: 202
                })
            }
            resolve(answer)
        }).catch((err) => {console.log(err);});
    })
}

/*
    Pregunta 5: ¿Cuál es la raza que más tiene 
    reportes de abandono o extravío?
*/
function question5(){
    return new Promise((resolve, reject) => {
        Promise.all([lostModel.retrieveLosts()]).then(value =>{
            let arrayValue = value[0]
            let answer = {
                            pregunta: `¿Cuál es la raza que más tiene reportes de abandono o extravío?`,
                            raza: arrayValue[0].race
                        };

            if (arrayValue.length === 0) {
                reject({
                    message: 'no products available',
                    status: 202
                })
            }
            resolve(answer)
        }).catch((err) => {console.log(err);});
    })
}

/*
    Pregunta 6: ¿Cuál es el sector de la ciudad donde 
    más se reportan casos de mascotas abandonadas o extraviadas?
*/
function question6(){
    return new Promise((resolve, reject) => {
        Promise.all([emergencyModel.retrieveEmergencies()]).then(value =>{
            let arrayValue = value[0]
            let answer = {
                            pregunta: `¿Cuál es el sector de la ciudad donde más se reportan casos de mascotas abandonadas o extraviadas?`,
                            coordenadas: {
                                lon : arrayValue[0].xLongitude,
                                lat : arrayValue[0].yLatitude    
                            } 
                        };

            if (arrayValue.length === 0) {
                reject({
                    message: 'no products available',
                    status: 202
                })
            }
            resolve(answer)
        }).catch((err) => {console.log(err);});
    })
}

/*
    Pregunta 7: ¿Cuáles son los medicamentos más solicitados 
    por los usuarios?
*/
function question7(){
    return new Promise((resolve, reject) => {
        Promise.all([productsModel.retrieveProducts()]).then(value =>{
            let arrayValue = value[0]
            let answer = {pregunta: `¿Cuáles son los medicamentos más solicitados por los usuarios?`, 
                respuesta:[]}
            for(let i of arrayValue){
                if(i.type === 'Medicamento'){
                    answer.respuesta.push({
                        medicamento: i.name,
                        precio: "$"+ i.price + " COP"
                    })
                }
            }
            if (arrayValue.length === 0) {
                reject({
                    message: 'no products available',
                    status: 202
                })
            }
            resolve(answer)
        }).catch((err) => {console.log(err);});
    })
}

/*
    Pregunta 8: ¿Cuáles son los productos veterinarios 
    más solicitados?
*/
function question8(){
    return new Promise((resolve, reject) => {
        Promise.all([productsModel.retrieveProducts()]).then(value =>{
            let arrayValue = value[0]
            let answer = {pregunta: `¿Cuáles son los productos veterinarios más solicitados?`, 
                respuesta:[]}
            for(let i of arrayValue){
                if(i.type === 'Medicamento'){
                    answer.respuesta.push({
                        medicamento: i.name,
                        precio: "$"+ i.price + " COP"
                    })
                }
            }
            if (arrayValue.length === 0) {
                reject({
                    message: 'no products available',
                    status: 202
                })
            }
            resolve(answer)
        }).catch((err) => {console.log(err);});
    })
}

/*
    Pregunta 9: ¿Cuál es la raza que más tiene 
    reportes de haber sido encontrada en la calle?
*/
function question9(){
    return new Promise((resolve, reject) => {
        Promise.all([petModel.retrievePets()]).then(value =>{
            let arrayValue = value[0]
            let answer = {
                            pregunta: `¿Cuál es la raza que más tiene reportes de haber sido encontrada en la calle?`,
                            raza: arrayValue[1].race
                        };

            if (arrayValue.length === 0) {
                reject({
                    message: 'no products available',
                    status: 202
                })
            }
            resolve(answer)
        }).catch((err) => {console.log(err);});
    })
}

/*
    Pregunta 10: ¿Cuál es el sector de la ciudad 
    donde más se reportan casos de mascotas que han sido encontradas?
*/
function question10(){
    return new Promise((resolve, reject) => {
        Promise.all([foundModel.retrieveFounds()]).then(value =>{
            let arrayValue = value[0]
            let answer = {
                            pregunta: `¿Cuál es el sector de la ciudad donde más se reportan casos de mascotas que han sido encontradas?`,
                            coordenadas: {
                                lon : arrayValue[0].xLongitude,
                                lat : arrayValue[0].yLatitude    
                            } 
                        };

            if (arrayValue.length === 0) {
                reject({
                    message: 'no products available',
                    status: 202
                })
            }
            resolve(answer)
        }).catch((err) => {console.log(err);});
    })
}

module.exports = {
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10
}