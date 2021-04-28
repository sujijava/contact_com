import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

export default function Header() {
  const { currentUser } = useAuth()

  const loggedOut = (
    <NavDropdown title='User' id='basic-nav-dropdown'>
      <NavDropdown.Item href='/login'>Sign In</NavDropdown.Item>
    </NavDropdown>
  )

  const signedIn = <div></div>

  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='/'>
        <span>
          <h3>Contact.com</h3>by Susie
        </span>
      </Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link to='/sign_out'>
          {/* {currentUser.email ? currentUser.email : 'sign in'} */}
          <NavDropdown title='User' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Sign Out</NavDropdown.Item>
            {/* <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>
              Separated link
            </NavDropdown.Item> */}
          </NavDropdown>
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
