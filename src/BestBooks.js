import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import './Bestbook.css'
import bookcover from './book.jpg';
import Rating from './Rating';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
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
    </Carousel.Item>
    })
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <section id='bookSection'>
          {this.state.books.length ? (
            <div id='divContainer'><Carousel fade id='carousel'>{books}</Carousel></div>
          ) : (
            <h3>The Book Collection is Empty</h3>
          )}
        </section>
      </>
    )
  }
}

export default BestBooks;
