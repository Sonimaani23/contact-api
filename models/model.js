const mongoose=require('mongoose')
 const contactSchema =new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true }
 })
 const contact=mongoose.model('contact', contactSchema)
 module.exports=contact;