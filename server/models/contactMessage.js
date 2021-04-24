import mongoose from 'mongoose'

const contactSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  image: String,
  group: String,
  // userEmail: String,
})

var ContactMessage = mongoose.model('ContactMessage', contactSchema)

export default ContactMessage
