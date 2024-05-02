const express=require('express')
const clothController=require('../controller/clothController')
const router=express.Router()

router
.route('/')
.get(clothController.getAllClothes)


router.post('/',clothController.getSearch)

/* 

*/

router
.route('/add-cloths')
.post(clothController.addCloth)
router.get('/all-products',clothController.getAllProducts)

module.exports=router