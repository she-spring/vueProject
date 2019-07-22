const mongoose = require("./db.js");
const Schema = mongoose.Schema;

const DetailSchema = new Schema({

});

module.exports = mongoose.model('Detail',DetailSchema);