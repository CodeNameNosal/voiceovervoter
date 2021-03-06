import React from 'react';
import { Link } from 'react-router-dom';
import BookTile from '../components/BookTile';
import Welcome from '../components/Welcome';

class BooksIndexContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      error: false,
      pageLoaded: false
    }
    this.deleteBook = this.deleteBook.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/books.json`,{
      credentials: "same-origin"
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`;
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then((responseData) => {
      if (responseData.error) {
        this.setState({error: responseData.error})
      } else {
        this.setState({books: responseData, pageLoaded: true})
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  deleteBook(id){
    if(confirm('Delete this book?')) {
      fetch(`/books/${id}`, {
        method: 'DELETE',
        credentials: 'same-origin'
      })
      .then(response => response.json())
      .then((responseData) => {
        if (responseData.error) {
          this.setState({error: responseData.error})
        } else {
          this.setState({books: responseData})
        }
      })
    }
  }

  render() {
    let display;
    if ((this.state.error) || ((this.state.books.length == 0 && this.state.pageLoaded == true))){
      display = <Welcome />
    } else {
      display = this.state.books.map(book => {
        let individualDelete = () => { this.deleteBook(book.id) }
        return (
          <BookTile
            key={book.id}
            book={book}
            deleteBook={individualDelete}
          />
        )
      })
    }

    return (
      <ul className="small-block-grid-1 medium-block-grid-2 large-block-grid-3">
        {display}
      </ul>
    )
  }
}

export default BooksIndexContainer;
