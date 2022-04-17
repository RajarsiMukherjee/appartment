const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema(
    {
        id: { type: Number, required: true, unique: true },
        name: { type: String, required: true },
        gender: {type: String, required: true},
        age : {type : Number, required: true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = mongoose.model("flat", flatSchema);



// const { Schema, model } = require("mongoose");

// const flatSchema = new Schema(
//   { 
//     block: { type: String, required: true },
//     flat_number: { type: Number, required: true },
//     type: { type: String, required: true },
//     image: {type: String},
//     residents: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "resident"
//       },
//     ],
//   },
//   {
//     versionKey: false,
//   }
// );

// module.exports = model("flat", flatSchema);