const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    telephone: String,
    circle: String,
    subCircle: String,
    level: String,

});


const userReq = mongoose.model("userReq", usersSchema);


module.exports = userReq;