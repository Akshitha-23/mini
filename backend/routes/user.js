const router = require('express').Router();
let User = require('../models/user_auth.model');
router.route('/register').post(async (req,res) =>
{
   try {
     await User.create({
        rollnumber: req.body.rollnumber,
        password: req.body.password,
        firstname: req.body.firstname,
        secondname: req.body.secondname,
        mobile: req.body.mobile,
     })
     res.json({ status:'ok'})
   } catch (error) {
      res.json({ status: 'error', error: 'The student with the given roll number already exists!!'})
   }

})

router.route('/login').post(async (req,res) =>
{
      const user = await User.findOne({
        rollnumber: req.body.rollnumber,
        password: req.body.password,
     })

    if(user){
        return res.json({status: 'ok', user:true})
    } 
    else{
        return res.json({ status: 'error',user:false})
    }
})
module.exports = router;
