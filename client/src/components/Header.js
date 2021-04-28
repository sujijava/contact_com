import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

export default function Header() {
  const { currentUser } = useAuth()

  const logOutHandler = () => {
    console.log('logout')
  }

  const loggedOut = (
    <>
      <NavDropdown.Item href='/login'>Log In</NavDropdown.Item>
      <NavDropdown.Item href='/signup'>Sign up</NavDropdown.Item>
    </>
  )

  const signedIn = (
    <>
      <NavDropdown.Item href='/logout' onClick={() => logOutHandler()}>
        Log out
      </NavDropdown.Item>
    </>
  )

  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='/'>
        <span>
          <h3>Contact.com</h3>by Susie
        </span>
      </Navbar.Brand>
      <Nav className='ml-auto'>
        <NavDropdown
          title={
            currentUser
              ? `Welcome, ${currentUser.email}`
              : `Welcome to contact.com`
          }
          id='basic-nav-dropdown'
        >
          {currentUser ? signedIn : loggedOut}
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}
