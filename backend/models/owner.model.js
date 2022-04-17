const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
    {
        id: { type: Number, required: true, unique: true },
        type: { type: String, required: true },
        block : {type: String, required: true},
        blockNo : {type : Number, required: true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = mongoose.model("owner", ownerSchema);