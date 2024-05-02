const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        validate:function(val){
            if(!validator.isEmail(val)){
                throw new Error('Email is not correct')
            }
        }
    },
    password:{
        type:String,
        required:[true,'Please provide a password'],
        minlength:8,
        select:false
    }
}) 

userSchema.pre('save',async function(next){
    const user=this
    if(!user.isModified('password')) return next()
    user.password=await bcrypt.hash(this.password,12)
    //delete passwordconfirm field
    //user.passwordConfirm=undefined
    
})

userSchema.methods.correctPassword=async function(enteredPassword,realUserPassword){
    return await bcrypt.compare(enteredPassword,realUserPassword)
}


const User=mongoose.model('User',userSchema)

module.exports=User
