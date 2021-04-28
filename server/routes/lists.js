import express from 'express'

import {
  getContacts,
  getContact,
  addContact,
  deleteContact,
  editContact,
  getContactsByUser,
} from '../controllers/contacts.js'

const router = express.Router()

router.get('/', getContacts)
router.get('/:id', getContact)
router.post('/', addContact)
router.delete('/:id', deleteContact)
router.post('/edit/:id', editContact)
router.get('/user/:id', getContactsByUser)
export default router
