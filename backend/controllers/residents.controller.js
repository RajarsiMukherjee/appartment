const express = require("express");
const router = express.Router()

const Residents = require("../models/resident.model");

router.post("",async(req,res) =>{
    try{
        const residents = await Residents.create(req.body);
        return res.status(200).send(residents);
    }
    catch(err){
        return res.status(500).send(err.massage); 
    }
})

router.get("",async(req,res) =>{
    try{
        const residents = await Residents.find().lean().exec();
        return res.status(200).send(residents);
    }
    catch(err){
        return res.status(500).send(err.massage); 
    }
})

router.get("/:id",async(req,res) =>{
    try{
        const residents = await Residents.findById(req.params.id).lean().exec();
        return res.status(200).send(residents);
    }
    catch(err){
        return res.status(500).send(err.massage); 
    }
})

module.exports = router