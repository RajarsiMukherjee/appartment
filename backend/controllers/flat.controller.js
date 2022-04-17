const express = require("express");
const flat = require("../models/flat.model");
const crudController = require("./crud.controller");
const router = express.Router();

router.post("/flat", crudController(flat).post);

router.get("/flat", crudController(flat).getAll);
router.get("/:id", async (req, res) => {
  try {
    const Flat = await flat.find({ id: req.params.id }).lean().exec();

    if (Flat) {
      return res.send(Flat);
    } else {
      return res.status(404).send({ message: "Flat not found" });
    }
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

 
module.exports = router;


// const express = require("express");
// const router = express.Router()

// const Flats = require("../models/flat.model");

// router.post("",async(req,res) =>{
//     try{
//         const flats = await Flats.create(req.body);
//         return res.status(200).send(flats);
//     }
//     catch(err){
//         return res.status(500).send(err.massage); 
//     }
// })

// router.get("",async(req,res) =>{
//     try{
//         const flats = await Flats.find().population({
//             path:"residents"
//         });
//         return res.status(200).send(flats);
//     }
//     catch(err){
//         return res.status(500).send(err.massage); 
//     }
// })

// module.exports = router