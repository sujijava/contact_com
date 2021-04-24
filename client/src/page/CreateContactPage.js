import React from 'react'
import CreateForm from '../components/CreateForm'
import ContactListContainer from '../components/ContactListContainer'
import { Container, Row, Col } from 'react-bootstrap'

export default function CreateContactPage() {
  return (
    <Container maxWidth='lg' style={{ marginTop: '5%' }}>
      <Row>
        <Col sm={8}>
          <ContactListContainer />
        </Col>
        <Col sm={4}>
          <CreateForm />
        </Col>
      </Row>
    </Container>
  )
}
