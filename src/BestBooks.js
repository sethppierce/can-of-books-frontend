import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import './Bestbook.css'
import bookcover from './book.jpg';
import Rating from './Rating';
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      display: false
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

getBooks = async () => {
  try {
    let bookData = await axios.get(`https://can-of-books-ste-sef.herokuapp.com/books`);
    this.setState({books: bookData.data});
  }catch(error){
    console.log(`Error: ${error.response}`);
  }
}

handleBookSubmit = (event) => {
  event.preventDefault();
  let newBook = {
    title: event.target.bookTtl.value,
    description: event.target.bookDescript.value,
    rating: event.target.bookRating.value
  }
  console.log(newBook)
  this.postBook(newBook)
}

postBook = async (newBookObj) => {
  try {
    let newBook = await axios.post(`https://can-of-books-ste-sef.herokuapp.com/books` , newBookObj)

    this.setState({
      books: [...this.state.books, newBook.data],
      display: false
    })

  } catch (error) {
    console.log(error.message)
  }
}

deleteBook = async (id) => {
  try {

    await axios.delete(`https://can-of-books-ste-sef.herokuapp.com/books/${id}`)

    let updatedBooks = this.state.books.filter(book => book._id !== id)

    this.setState({
      books: updatedBooks
    })

  } catch (error) {
    console.log(error.message)
  }
}

componentDidMount(){
  this.getBooks();
}

  render() {
    console.log(this.state.books)
    /* TODO: render all the books in a Carousel */
    let books = this.state.books.map(book => {
      return <Carousel.Item key={book._id} id='carouselItem'>
      <img
        className="d-block w-100 h-50"
        src={bookcover}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 id='bookTitle'>{book.title}</h3>
        <p id='bookDescription'>{book.description}</p>
        <Rating rating={book.rating} id='rating'/>
      </Carousel.Caption>
      <div id='buttonDiv'><Button onClick={() => {this.deleteBook(book._id)}} id='deleteBook' variant="danger">Delete Book</Button></div>
    </Carousel.Item>
    })
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <BookFormModal  show={this.state.display} onHide={()=> this.setState({display:false})} onSubmit={this.handleBookSubmit}/>
        <section id='bookSection'>
          {this.state.books.length ? (
            <div id='divContainer'><Carousel fade id='carousel'>{books}</Carousel></div>
          ) : (
            <h3>The Book Collection is Empty</h3>
          )}
          <Button onClick={()=> this.setState({display:true})} id='addBook'>Add Book</Button>
        </section>
      </>
    )
  }
}

export default BestBooks;
