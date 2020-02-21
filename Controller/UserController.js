// model 
const UserModel = require('../Model/UserModel')

exports.test = (req, res) => {
    res.send('Ok Fiks')
}

exports.saveData = (req, res) => {
    let user = new UserModel({
        nim: req.body.nim,
        nama: req.body.nama,
        kelas: req.body.kelas
    })
    user.save((err) => {
        if (err) {
            return next(err)
        }
        res.send("Success")
    })
}

exports.getData = (req,res) => {
    UserModel.find({},(err,todos)=>{
        if (err) return next(err)
        res.send(todos)
    })
}