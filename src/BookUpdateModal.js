import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default class BookUpdateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    
    let bookToUpdate = {
      title: event.target.updateBookTitle.value,
      description: event.target.updateBookDescript.value,
      rating: event.target.updateBookRating.value,
      _id: this.props.book._id,
      __v: this.props.book.__v
    }
    console.log(bookToUpdate)
    this.props.updateBooks(bookToUpdate)
    }

  render() {
    console.log(this.props.book)
    return (
    <>
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Update Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="updateBookTitle">
                <Form.Label>Book Title</Form.Label>
                <Form.Control type="text" defaultValue={this.props.book.title} required/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="updateBookDescript">
                <Form.Label>Book description</Form.Label>
                <Form.Control type="text" defaultValue={this.props.book.description} required/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="updateBookRating">
                <Form.Label>Book Rating</Form.Label>
                <Form.Control type="number"  min='1' max='5'  defaultValue={this.props.book.rating} required/>
              </Form.Group>

              <Button variant="primary" type="submit">
                Update
              </Button>
            </Form>
        </Modal.Body>
      </Modal>
    </>
    )
  }
}
