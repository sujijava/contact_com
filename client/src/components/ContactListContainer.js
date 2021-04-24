import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ContactCard from './ContactCard'

export default function ContactListContainer() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/contacts').then((response) => {
      setContacts(response.data)
    })
  }, [contacts])

  const rendering = contacts.map((contact) => {
    return (
      <ContactCard
        _id={contact._id}
        firstName={contact.firstName}
        lastName={contact.lastName}
        group={contact.group}
        email={contact.email}
      ></ContactCard>
    )
  })
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>{rendering}</div>
    // <table id='myTable'>
    //   <tr class='header'>
    //     <th>Name</th>
    //     <th>Email</th>
    //     <th>Phone Number</th>
    //     <th>Number of Family</th>
    //     <th>List of Friends</th>
    //     <th>Address</th>
    //   </tr>
    //   <tr>
    //     <td>Alfreds Futterkiste</td>
    //     <td>Germany</td>
    //     <td>Alfreds Futterkiste</td>
    //     <td>Germany</td>
    //     <td>Alfreds Futterkiste</td>
    //     <td>Germany</td>
    //   </tr>
    // </table>
  )
}
