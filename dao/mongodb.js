
const imageModel = require('../model/imageModel')

const AddImage = (body) => {
   
    return new Promise (async(resolve, reject) => {
        try{
            const imageBase64 = await imageModel.create(body)
            
            resolve(imageBase64)
        }
        catch(error) {
            return reject()
        }
          
        
    })
}

module.exports = { AddImage }