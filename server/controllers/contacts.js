import express from 'express'
import ContactMessage from '../models/contactMessage.js'

const router = express.Router()

//method: get
//get all contacts
export const getContacts = async (req, res) => {
  ContactMessage.find()
    .then((lists) => res.json(lists))
    .catch((err) => res.status(400).json('Error: ' + err))
}

//method: get
//get a contact
export const getContact = async (req, res) => {
  ContactMessage.findById(req.params.id)
    .then((list) => res.json(list))
    .catch((err) => res.status(400).json('Error: ' + err))
}

//method:post
//add a list
export const addContact = async (req, res) => {
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.email
  const image = req.body.image
  const group = req.body.group

  const newContactMessage = new ContactMessage({
    firstName,
    lastName,
    email,
    image,
    group,
  })

  newContactMessage
    .save()
    .then(() => res.json('A list added!'))
    .catch((err) => res.status(400).json('Error: ' + err))
}

//method: delete
//a list
//delete a list

export const deleteContact = async (req, res) => {
  ContactMessage.findByIdAndDelete(req.params.id)
    .then(() => res.json('A list deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err))
}

export const editContact = async (req, res) => {
  ContactMessage.findById(req.params.id)
    .then((contact) => {
      contact.firstName = req.body.firstName
      contact.lastName = req.body.lastName
      contact.email = req.body.email
      contact.image = req.body.image
      contact.group = req.body.group

      contact
        .save()
        .then(() => res.json('Contact updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
}

export default router
