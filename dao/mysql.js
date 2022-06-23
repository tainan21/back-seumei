const { req } = require('express')
const dao = require('../config/index')


const listProduto = () => {
   
    const query = `select * from produto`
   
    return  new Promise((resolve, reject) =>{
        

            dao.pool.getConnection((error, conn) => {
            conn.query(query,            
                (error, results, fields) => {
                    if (error) 
                    {  
                        conn.release()
                        return reject(error)
                         
                    }
                    else
                    { 
                        conn.release()
                        return resolve(results)
                    }                                                                          
                }
            )
        })
    })
   
}

const listCategory = () => {
   
    const query = `select * from category`
   
    return  new Promise((resolve, reject) =>{
        

            dao.pool.getConnection((error, conn) => {
            conn.query(query,            
                (error, results, fields) => {
                    if (error) 
                    {  
                        conn.release()
                        return reject(error)
                         
                    }
                    else
                    { 
                        conn.release()
                        return resolve(results)
                    }                                                                          
                }
            )
        })
    })
   
}

const addProduto = (body) => {
       
    const query = `INSERT INTO produto (CreationDate, CreationUserId, UpdateDate, UpdateUserId, DeletionDate, DeletionUserId, code, name, description, image, price, category, quantity, rating, sales) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

    let VALUES = [body.CreationDate, body.CreationUserId, body.UpdateDate, body.UpdateUserId, body.DeletionDate, body.DeletionUserId,
     body.code, body.name, body.description, body.image, body.price, body.category, body.quantity, body.rating, body.sales]
   
    return  new Promise((resolve, reject) =>{

            dao.pool.getConnection((error, conn) => {
            conn.query(query, VALUES,            
                (error, results, fields) => {
                    if (error) 
                    {  
                        conn.release()
                        return reject(error)
                         
                    }
                    else
                    { 
                        conn.release()
                        return resolve(results)
                    }                                                                          
                }
            )
        })
    })
   
}




module.exports = { listProduto, addProduto, listCategory }