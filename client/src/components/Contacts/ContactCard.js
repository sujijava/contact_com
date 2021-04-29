import React from 'react'
import { useHistory } from 'react-router-dom'

export default function ContactCard(props) {
  let history = useHistory()

  const editContact = () => {
    history.push(`edit/${props._id}`)
  }

  return (
    <div
      className='card'
      style={{
        width: '13rem',
        height: '20rem',
        margin: '0.1rem 0.1rem 2rem 0.1rem',
      }}
    >
      <div
        className='container'
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <img
          style={{ width: '100px', marginTop: '10px', marginBottom: '-10' }}
          className='card-img-top'
          src={props.image ? props.image : './assets/userProfile.png'}
          alt='Card image cap'
        />
      </div>
      <div className='card-body'>
        <h5 className='card-title'>
          {props.firstName} {props.lastName}
        </h5>
        <p className='card-title' style={{ fontWeight: 'bold' }}>
          # {props.group}
        </p>
        <p style={{ fontSize: 'small' }} className='card-text'>
          {props.email}
        </p>
        <div>
          <button
            className='btn btn-danger'
            style={{ marginRight: '1%' }}
            onClick={() => props.deleteContact(props._id)}
          >
            Delete
          </button>
          <button className='btn btn-primary' onClick={() => editContact()}>
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}
