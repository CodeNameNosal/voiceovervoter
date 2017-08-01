import React, { Component }  from 'react';

class BookShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    }
  }

  componentDidMount() {
    fetch(`/api/v1/books/${this.props.match.params.id}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        let errorMessage = `${response.status} (${response.statusText})`;
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {
      this.setState({
        book: response.book
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render() {
    return(
      <div>
        <p>This is the BookShowPage</p>
        <h1 className='BookShowPage-title'>"{this.state.book.title}"</h1>
        <p className='BookShowPage-author'>by {this.state.book.author}</p>
      </div>
    )
  }
}

export default BookShowPage;
