import React from 'react';
import { Link } from 'react-router-dom';
import BookTile from '../components/BookTile';
import TextField from '../components/TextField';


class SearchContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      error: false,
      pageLoaded: false,
      query: '',
      noResults: null
    };
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleTextFieldChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSearch(event) {
    event.preventDefault()
    let query = '?title='+encodeURIComponent(this.state.query);
    fetch('/api/v1/books/search' + query, {
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        let error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => {
      console.log(response)
      this.setState({ books: response.books, noResults: false })
      if (response.books.length === 0) {
        this.setState({ noResults: true })
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {

    let display;
    if ((this.state.error) || ((this.state.books.length == 0 && this.state.pageLoaded == true))){
      display = <NoBooks />
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

    let noResultsMessage = ''
    if (this.state.noResults) {
      noResultsMessage = <div className="small-12 columns text-center">
        No albums found for "{this.state.query}"
      </div>
    }


    return (
      <div>
      <form onSubmit={this.handleSearch}>
        <div className="small-11 columns">
          <TextField
            name='query'
            content={this.state.query}
            handleChange={this.handleTextFieldChange}
          />
        </div>
        <div className="small-1 columns">
          <input className='button secondary small' type='submit' value='Search' />
        </div>
      </form>
      <div className="row">
        {display}
      </div>
      {noResultsMessage}
    </div>
    )
  }
}

export default SearchContainer;
