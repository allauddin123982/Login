const mongoose = require('mongoose')

const EmpSchema = new mongoose.Schema({
    namee: String,
    email: String,
    password: String,
    image: Buffer
})


const empModel = mongoose.model("employees",EmpSchema)
module.exports = empModel