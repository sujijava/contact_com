import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ContactCard from './ContactCard'
import { Button } from 'react-bootstrap'

export default function ContactListContainer() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/contacts').then((response) => {
      setContacts(response.data)
    })
  }, [contacts])

  const deleteContact = (id) => {
    axios.delete('http://localhost:5000/contacts/' + id).then((response) => {
      console.log(response.data)
    })

    let tempContact = contacts.filter((el) => el._id !== id)
    setContacts(tempContact)
  }

  const firstNameSortHandler = (e) => {
    e.preventDefault()
    console.log('clicked')
  }

  const rendering = contacts.map((contact) => {
    return (
      <ContactCard
        key={contact._id}
        _id={contact._id}
        firstName={contact.firstName}
        lastName={contact.lastName}
        group={contact.group}
        email={contact.email}
        deleteContact={deleteContact}
      ></ContactCard>
    )
  })

  return (
    <div className='container'>
      <div className='row justify-content-end'>
        <Button
          variant='light'
          onClick={firstNameSortHandler}
          style={{ marginRight: '0.5rem' }}
        >
          Sort by: First name
        </Button>
        <Button variant='light' onClick={firstNameSortHandler}>
          Sort by: Last name
        </Button>
      </div>
      <div>
        <div className='form-group row' style={{ marginTop: '1%' }}>
          <select
            className='form-select form-control'
            aria-label='Default select example'
            // value={group}
            // onChange={(e) => {
            //   setGroup(e.target.value)
            // }}
          >
            <option selected>Group: Company Name</option>
            <option value='Inkblot'>Inkblot</option>
            <option value='Sheridan College'>Sheridan College</option>
          </select>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>{rendering}</div>
    </div>
  )
}
