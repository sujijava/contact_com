import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ContactCard from './ContactCard'
import { useAuth } from '../contexts/AuthContext'

export default function ContactListContainer() {
  const [contacts, setContacts] = useState([])
  const [contactsForSortFilter, setContactsForSortFilter] = useState([])

  const { currentUser } = useAuth()
  const [sortFilterType, setSortFilterType] = useState({
    sort: 'date',
    filter: 'all',
  })

  useEffect(() => {
    axios
      .get(`http://localhost:5000/contacts/user/${currentUser.uid}`)
      .then((response) => {
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

  useEffect(() => {
    let oakvilleGroup = contacts.filter((contact) => {
      return contact.group == 'Oakville Town Hall'
    })

    let sheridanGroup = contacts.filter((contact) => {
      return contact.group == 'Sheridan College'
    })
    console.log(sheridanGroup)

    if (sortFilterType.filter === 'all') {
      switch (sortFilterType.sort) {
        case 'date':
          setContactsForSortFilter(contacts)
          break
        case 'first_name':
          setContactsForSortFilter(
            contacts.sort((a, b) => {
              let textA = a.firstName.toUpperCase()
              let textB = b.firstName.toUpperCase()
              return textA < textB ? -1 : textA > textB ? 1 : 0
            })
          )
          break
        case 'last_name':
          setContactsForSortFilter(
            contacts.sort((a, b) => {
              let textA = a.lastName.toUpperCase()
              let textB = b.lastName.toUpperCase()
              return textA < textB ? -1 : textA > textB ? 1 : 0
            })
          )
          break
      }
    }

    if (sortFilterType.filter === 'oakville') {
      switch (sortFilterType.sort) {
        case 'date':
          setContactsForSortFilter(oakvilleGroup)
          break
        case 'first_name':
          setContactsForSortFilter(
            oakvilleGroup.sort((a, b) => {
              let textA = a.firstName.toUpperCase()
              let textB = b.firstName.toUpperCase()
              return textA < textB ? -1 : textA > textB ? 1 : 0
            })
          )
          break
        case 'last_name':
          setContactsForSortFilter(
            oakvilleGroup.sort((a, b) => {
              let textA = a.lastName.toUpperCase()
              let textB = b.lastName.toUpperCase()
              return textA < textB ? -1 : textA > textB ? 1 : 0
            })
          )
          break
      }
    }

    if (sortFilterType.filter === 'sheridan') {
      switch (sortFilterType.sort) {
        case 'date':
          setContactsForSortFilter(sheridanGroup)
          break
        case 'first_name':
          setContactsForSortFilter(
            sheridanGroup.sort((a, b) => {
              let textA = a.firstName.toUpperCase()
              let textB = b.firstName.toUpperCase()
              return textA < textB ? -1 : textA > textB ? 1 : 0
            })
          )
          break
        case 'last_name':
          setContactsForSortFilter(
            sheridanGroup.sort((a, b) => {
              let textA = a.lastName.toUpperCase()
              let textB = b.lastName.toUpperCase()
              return textA < textB ? -1 : textA > textB ? 1 : 0
            })
          )
          break
      }
    }
  }, [sortFilterType])

  const renderingFromAPI = contacts.map((contact) => {
    return (
      <ContactCard
        key={contact._id}
        _id={contact._id}
        firstName={contact.firstName}
        lastName={contact.lastName}
        group={contact.group}
        email={contact.email}
        image={contact.image}
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
          image={contact.image}
          deleteContact={deleteContact}
        ></ContactCard>
      )
    }
  )

  return (
    <div className='container' style={{ marginTop: '-5%' }}>
      <div className='form-group row' style={{ marginTop: '1%' }}>
        <label>Sorted by:</label>
        <select
          className='form-select form-control'
          aria-label='Default select example'
          onChange={(e) => {
            setSortFilterType((prevState) => ({
              ...prevState,
              sort: e.target.value,
            }))
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
              setSortFilterType((prevState) => ({
                ...prevState,
                filter: e.target.value,
              }))
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
