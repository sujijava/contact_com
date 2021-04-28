import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../contexts/AuthContext'

export default function EditForm(props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState('')
  const [group, setGroup] = useState('')

  const { currentUser } = useAuth()

  const editUserSubmitHandler = (e) => {
    e.preventDefault()

    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      image: image,
      group: group,
      userId: currentUser.uid,
    }

    console.log(user)

    axios
      .post(
        'http://localhost:5000/contacts/edit/' + props.match.params._id,
        user
      )
      .then((res) => console.log(res.data))

    window.location = '/'
  }

  useEffect(() => {
    axios
      .get('http://localhost:5000/contacts/' + props.match.params._id)
      .then((response) => {
        // setUser({firstName: response.data.firstName})
        console.log(response.data)
        const user = response.data
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setEmail(user.email)
        setImage(user.image)
        setGroup(user.group)
      })
  }, [])

  console.log(props.match.params._id)

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-5'>
          <div className='card'>
            <h2 className='card-title text-center'>Edit Contact</h2>
            <div className='card-body py-md-4'>
              <form onSubmit={editUserSubmitHandler}>
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
                    <option value='Oakville Town Hall'>
                      Oakville Town Hall
                    </option>
                    <option value='Sheridan College'>Sheridan College</option>
                  </select>
                </div>
                <div className='d-flex flex-row align-items-center justify-content-between'>
                  <button className='btn btn-primary'>Edit Contact</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
