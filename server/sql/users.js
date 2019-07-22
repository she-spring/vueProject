const mongoose = require("./db.js");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

});

module.exports = mongoose.model('User',UserSchema);