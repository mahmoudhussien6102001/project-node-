const mongoose=require('mongoose')

const clothSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    avgRating:{
        type:Number/* ,
        required:true */
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        trim:true
    }
})

const Cloth=mongoose.model('Cloth',clothSchema)

module.exports=Cloth