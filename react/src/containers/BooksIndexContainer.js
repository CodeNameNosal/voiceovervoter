import React from 'react';
import { Link } from 'react-router-dom';
import BookTile from '../components/BookTile';

class BooksIndexContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: []
    }
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
      this.setState({books: responseData})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {
    let books = this.state.books.map(book => {
      return (
        <BookTile
          key={book.id}
          book={book} />
      )
    })

    return (
      <div>
        {books}
      </div>
    )
  }
}

export default BooksIndexContainer;
