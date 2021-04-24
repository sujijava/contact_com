import React, { useState } from 'react'
import axios from 'axios'

export default function CreatForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState('')
  const [group, setGroup] = useState('')

  const creatUserSubmitHandler = (e) => {
    e.preventDefault()
    // console.log(firstName)
    // console.log(lastName)
    // console.log(email)
    // console.log(image)
    // console.log(group)

    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      image: image,
      group: group,
    }

    console.log(user)

    axios
      .post('http://localhost:5000/contacts', user)
      .then((res) => console.log(res.data))

    window.location.reload()
  }

  return (
    <div className='card'>
      <h2 className='card-title text-center'>Create Contact</h2>
      <div className='card-body py-md-4'>
        <form onSubmit={creatUserSubmitHandler}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='first_name'
              placeholder='First name'
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='last_name'
              placeholder='Last name'
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='Email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>

          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='image'
              placeholder='Image URL'
              value={image}
              onChange={(e) => {
                setImage(e.target.value)
              }}
            />
          </div>
          <div className='form-group'>
            <select
              className='form-select form-control'
              aria-label='Default select example'
              value={group}
              onChange={(e) => {
                setGroup(e.target.value)
              }}
            >
              <option selected>Group: Company Name</option>
              <option value='Inkblot'>Inkblot</option>
              <option value='Sheridan College'>Sheridan College</option>
            </select>
          </div>
          <div className='d-flex flex-row align-items-center justify-content-between'>
            <button className='btn btn-primary'>Create Contact</button>
          </div>
        </form>
      </div>
    </div>
  )
}
