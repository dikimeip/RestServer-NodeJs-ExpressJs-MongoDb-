const mongoose = require('mongoose')

const Schema = mongoose.Schema;

let UserSchema = Schema({
    nim : {type:Number},
    nama : {type:String},
    kelas : {type:String}
})

module.exports = mongoose.model('User',UserSchema)