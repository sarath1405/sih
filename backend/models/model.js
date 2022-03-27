const mongoose = require('mongoose')

const itemSchema = {
    unqid : String,
    regid : String,
    name : String,
    college : String,
    email : String,
    phone : String
}

const item = mongoose.model("item", itemSchema);

module.exports = item;