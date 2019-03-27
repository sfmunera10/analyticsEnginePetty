
const productsModel = require('./product.model')


let arrayPromise = [productsModel.retrieveProducts()];

//retrieve from Firebase
function retrievePromise(){
    return new Promise((resolve, reject) => {
        Promise.all(arrayPromise).then(value =>{

            if (value.length === 0) {
                reject({
                    message: 'no products available',
                    status: 202
                })
            }
            resolve(value)
        }).catch((err) => {console.log(err);});
    })
}


module.exports = {
    retrievePromise
}