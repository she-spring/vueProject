const mongoose = require("./db.js");
const Schema = mongoose.Schema;

const ProlistSchema = new Schema({

});

module.exports = mongoose.model('Prolist',ProlistSchema);