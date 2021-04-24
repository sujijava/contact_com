import express from 'express'

import {
  getContacts,
  getContact,
  addContact,
  deleteContact,
  editContact,
} from '../controllers/contacts.js'

const router = express.Router()

router.get('/', getContacts)
router.get('/:id', getContact)
router.post('/', addContact)
router.delete('/:id', deleteContact)
router.post('/edit/:id', editContact)
export default router
