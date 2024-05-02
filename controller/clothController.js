const Cloth= require('../models/clothesModel')

exports.addCloth=async(req,res)=>{
    try {
        const cloth=await Cloth.create({
            image:req.body.image,
            avgRating:req.body.avgRating,
            price:req.body.price,
            description:req.body.description
        })
        res.status(201).json({
            cloth
        })
    } catch (error) {
        res.status(404).json({
            status:'fail',
            message:error.message
        })
    }
}
exports.getAllClothes=async(req,res)=>{
    try {
        const cloths=await Cloth.find().limit()
        res.render('main',{
            cloths
        })
    } catch (error) {
        res.status(404).json({
            status:'fail',
            message:error.message
        })
    }
}

exports.getAllProducts=async(req,res)=>{
    try {
        const products=await Cloth.find()
        res.render('products',{
            products
        })
    } catch (error) {
        res.render('404')
    }
}



 exports.getSearch=async(req,res)=>{
    let search=req.body.payload
    console.log(search);
    
        res.redirect('/')
}
