const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://rajarsi:1122@cluster0.k6sta.mongodb.net/apartment")
}
//mongodb+srv://rajarsi:1122@cluster0.k6sta.mongodb.net/apartment