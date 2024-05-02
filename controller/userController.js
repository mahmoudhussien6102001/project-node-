const User=require('../models/userModel')
const appError=require('../utils/appError')

exports.postSignup = async (req, res) => {
    try {
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      res.redirect('/cloths/login')
    } catch (err) {
      res.status(401).render('404')
    }
};
  
exports.getSignup=async(req,res)=>{
 res.render('sign-up')   
}

exports.postLogin = async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
  
      //1)check if email and password exists while entering them
      if (!email || !password) {
        throw new Error('Provide the email and password')
      }
      //2)check if user exists and password correct
      const user = await User.findOne({ email }).select('+password');
      const correctPassword = await user.correctPassword(password, user.password);
  
      if (!user || !correctPassword) {
        throw new Error('Incorrect Password or Email');
      }
      res.redirect('/cloths')   
      
      /* 
      res.status(200).json({
        status: 'success',
      }); */
    } catch (err) {
      //401 unauthorized incorrect password or email
      res.status(401).render('404')
    }
};

exports.getLogin=async(req,res)=>{
    try {
        res.render('login')       
    } catch (err) {
      
    }
}