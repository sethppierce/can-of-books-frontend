import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default class BookFormModal extends Component {
  render() {
    return (
    <>
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={this.props.onSubmit}>
              <Form.Group className="mb-3" controlId="bookTtl">
                <Form.Label>Book Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Book Title" required/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="bookDescript">
                <Form.Label>Book description</Form.Label>
                <Form.Control type="text" placeholder="Enter Book Description" required/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="bookRating">
                <Form.Label>Book Rating</Form.Label>
                <Form.Control type="number" placeholder="Enter Book " min='1' max='5' required/>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
        </Modal.Body>
      </Modal>
    </>
    )
  }
}
