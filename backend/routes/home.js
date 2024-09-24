const express = require("express")
const router = express.Router()
const Inquiry = require("../models/inquiry")


router.post("/", async(req, res) => {
    console.log(req.body); 
    // add request to db and send email

    const inquiry = new Inquiry({
        name: req.body.name,
        email: req.body.email,
        description: req.body.description
    })
    
    try{
        const savedquery = await inquiry.save()
        res.status(201).json(savedquery)
        
    }catch(error){
        res.status(400).json({ message: error.message });
    }
});


module.exports = router;