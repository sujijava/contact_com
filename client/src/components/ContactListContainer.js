import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ContactCard from './ContactCard'
import { Button, Form, Row, Col } from 'react-bootstrap'

export default function ContactListContainer() {
  const [contacts, setContacts] = useState([])
  const [contactsForSortFilter, setContactsForSortFilter] = useState([])

  const [sortType, setSortType] = useState('date')
  const [filterType, setFilterType] = useState('all')

  useEffect(() => {
    axios.get('http://localhost:5000/contacts').then((response) => {
      setContacts(response.data)
    })
  }, [contacts])

  const deleteContact = (id) => {
    axios.delete('http://localhost:5000/contacts/' + id).then((response) => {
      console.log(response.data)
    })

    console.log(contacts)
    let tempContact = contacts.filter((el) => el._id !== id)
    setContacts(tempContact)
    console.log(contacts)
  }

  const firstNameSortHandler = (e) => {
    e.preventDefault()
    setContactsForSortFilter(contacts)

    // console.log(contacts)
    let tempContacts = [...contacts]
    let ascSortedContacts = tempContacts.sort((a, b) => {
      let textA = a.firstName.toUpperCase()
      let textB = b.firstName.toUpperCase()
      return textA < textB ? -1 : textA > textB ? 1 : 0
    })

    console.log(ascSortedContacts)
    setContactsForSortFilter(ascSortedContacts)

    // console.log(contactsForSortFilter)
  }

  useEffect(() => {
    console.log('filter type changed')
    let oakvilleGroup = contactsForSortFilter.filter((contact) => {
      return contact.group == 'Oakville Town Hall'
      // console.log(contact.group)
    })
    console.log(oakvilleGroup)

    // console.log(contacts[3].group)
    let sheridanGroup = contactsForSortFilter.filter((contact) => {
      return contact.group == 'Sheridan College'
    })

    console.log(filterType)

    switch (filterType) {
      case 'oakville':
        setContactsForSortFilter(oakvilleGroup)
        break
      case 'sheridan':
        setContactsForSortFilter(sheridanGroup)
        break
    }
  }, [filterType])

  const renderingFromAPI = contacts.map((contact) => {
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

  const renderingFromSortingAndFilters = contactsForSortFilter.map(
    (contact) => {
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
    }
  )

  return (
    <div className='container'>
      {/* <div className='row justify-content-end'>
        <Button
          variant='light'
          onClick={firstNameSortHandler}
          style={{ marginRight: '0.5rem' }}
        >
          Sort by: First name
        </Button>
        <Button variant='light' onClick={lastNameSortHandler}>
          Sort by: Last name
        </Button>
      </div> */}

      <div className='form-group row' style={{ marginTop: '1%' }}>
        <label>Sorted by:</label>
        <select
          className='form-select form-control'
          aria-label='Default select example'
          onChange={(e) => {
            setSortType(e.target.value)
          }}
        >
          <option value='date' selected>
            Added Date: Latest-Oldest
          </option>
          <option value='first_name'>First Name: A-Z</option>
          <option value='last_name'>Last Name: A-Z</option>
        </select>
      </div>
      <div>
        <div className='form-group row' style={{ marginTop: '1%' }}>
          <label>Filter:</label>
          <select
            className='form-select form-control'
            aria-label='Default select example'
            onChange={(e) => {
              setFilterType(e.target.value)
            }}
          >
            <option value='all' selected>
              Group by Company: All
            </option>
            <option value='oakville'>
              Group by Company: Oakville Town Hall
            </option>
            <option value='sheridan'>Group by Company: Sheridan College</option>
          </select>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {contactsForSortFilter.length == 0
          ? renderingFromAPI
          : renderingFromSortingAndFilters}
      </div>
    </div>
  )
}
