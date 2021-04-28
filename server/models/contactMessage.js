import mongoose from 'mongoose'

const contactSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  image: String,
  group: String,
  userId: { type: String, required: true },
})

var ContactMessage = mongoose.model('ContactMessage', contactSchema)

export default ContactMessage
