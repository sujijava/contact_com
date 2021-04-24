import React from 'react'
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export default function ContactCard(props) {
  let history = useHistory()

  const editContact = () => {
    history.push(`edit/${props._id}`)
  }

  return (
    <div
      className='card'
      style={{
        minWidth: '15rem',
        height: '20rem',
        margin: '0.1rem 0.1rem 2rem 0.1rem',
      }}
    >
      <img className='card-img-top' src={props.image} alt='Card image cap' />
      <div className='card-body'>
        <h3 className='card-title'>{props.firstName}</h3>
        <h3 className='card-title'>{props.lastName}</h3>
        <h5 className='card-title'># {props.group}</h5>
        <p className='card-text'>{props.email}</p>
        <div>
          <button style={{ marginRight: '1%' }} className='btn btn-danger'>
            delete
          </button>
          <button className='btn btn-primary' onClick={() => editContact()}>
            edit
          </button>
        </div>
      </div>
    </div>
  )
}
