const mongoose = require("./db.js");
const Schema = mongoose.Schema;

const KindSchema = new Schema({

});

module.exports = mongoose.model('Kind',KindSchema);