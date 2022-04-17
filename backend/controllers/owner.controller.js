const express = require("express");
const owner = require("../models/owner.model");
const crudController = require("./crud.controller");
const router = express.Router();

router.post("/owner", crudController(owner).post);

router.get("/owner", crudController(owner).getAll);
router.get("/:id", async (req, res) => {
  try {
    const Owner = await owner.find({ id: req.params.id }).lean().exec();

    if (Owner) {
      return res.send(Owner);
    } else {
      return res.status(404).send({ message: "Owner not found" });
    }
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// router.patch("/:id", async (req, res) => {
//   try {
//     const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     })
//       .lean()
//       .exec();

//     res.status(201).send(book);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     const book = await Book.findByIdAndDelete(req.params.id).lean().exec();

//     res.send(book);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });

module.exports = router;
