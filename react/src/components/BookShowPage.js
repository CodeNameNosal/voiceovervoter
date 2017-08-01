import React, { Component }  from 'react';
import MatchTile from './MatchTile';

class BookShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
      relevantMatches: []
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


    fetch(`/api/v1/books/${this.props.match.params.id}/matches`)
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
        relevantMatches: response.relevantMatches
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))

  }

  render() {
    let mappedMatches = this.state.relevantMatches.map(match => {

    return(
      <MatchTile
        key={match.id}
        data={match}
      />
    )
  })
    return(
      <div>
        <p>This is the BookShowPage</p>
        <h1 className='BookShowPage-title'>"{this.state.book.title}"</h1>
        <p className='BookShowPage-author'>by {this.state.book.author}</p>
        <hr />
        {mappedMatches}
      </div>
    )
  }
}

export default BookShowPage;
