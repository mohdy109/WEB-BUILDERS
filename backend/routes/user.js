const router = require("express").Router();





const yasir = require('../models/form');

router.route('/add').post((req,res)=>{
const name = req.body.name;
const email =  req.body.email;
const contact = req.body.contact;
const message = req.body.message;

const asma = new yasir({

name,
email,
contact,
message,

})
asma.save().then(()=>res.json("form submit")).catch(err=>res.status(400).json("error " +err));
})


module.exports = router;