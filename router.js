const express = require('express')
const cors = require('cors')
//const moment = require('moment')
const router = express.Router()

router.use(cors())

router.get('/getListPedido', require('./api/pedido').listProduto)
router.get('/getlLstCategory', require('./api/pedido').listCategory)
router.post('/addProduto', require('./api/pedido').addProduto)



// end points Images
router.post('/AddImage', require('./api/image').AddImage)
router.get('/GetImg', require('./api/image').GetImg)




module.exports = router
