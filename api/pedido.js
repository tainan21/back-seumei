const dao = require('../dao/mysql')

const listProduto = async (request, response, next) => {

    try {
		result = await dao.listProduto()
	}
	catch(error) {
		return next(error)
	}
	return response.status(200).json(result)
}

const listCategory = async (request, response, next) => {

    try {
		result = await dao.listCategory()
	}
	catch(error) {
		return next(error)
	}
	return response.status(200).json(result)
}


const addProduto = async (request, response, next) => {	
    try {
		result = await dao.addProduto(request.body)
	}
	catch(error) {
		return next(error)
	}
	return response.status(200).json(result)
}

module.exports = {listProduto, addProduto, listCategory }