import React from 'react';
import { Link } from 'react-router-dom';
import BookTile from '../components/BookTile';

class BooksIndexContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      error : false
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
      if (responseData.error) {
        // console.log(responseData.error)
        this.setState({error: responseData.error})
      } else {
        this.setState({books: responseData})
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {
    let display;
    if (this.state.error) {
      display = <h1> No books! </h1>
    } else {
      display = this.state.books.map(book => {
        return (
          <BookTile
            key={book.id}
            book={book} />
        )
      })
    }


    return (
      <div className="row">
        {display}
      </div>
    )
  }
}

export default BooksIndexContainer;
