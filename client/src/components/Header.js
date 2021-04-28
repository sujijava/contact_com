import React from 'react'
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='/'>
        <span>
          <h3>Contact.com</h3>by susie
        </span>
      </Navbar.Brand>
      <Nav className='ml-auto'>
        <Nav.Link to='/sign_out'>Sign Out</Nav.Link>
      </Nav>
    </Navbar>
  )
}
