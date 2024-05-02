const express=require('express')
const router=express.Router()
const userController=require('../controller/userController')
router.route('/login')
.post(userController.postLogin)
.get(userController.getLogin)

router.route('/sign-up')
.post(userController.postSignup)
.get(userController.getSignup)

module.exports=router