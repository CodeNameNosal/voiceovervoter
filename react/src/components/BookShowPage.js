import React, { Component }  from 'react';
import MatchTile from './MatchTile';
import MatchForm from './MatchForm';

class BookShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
      relevantMatches: [],
      randomVoice: {
        url: undefined,
        booking: undefined,
        talentid: undefined
      }
    }
  this.handleClick = this.handleClick.bind(this)
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


    fetch(`/api/v1/books/${this.props.match.params.id}/matched_voices`)
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

  handleClick(event) {
    fetch(`/api/v1/voicebunnies/randomVoice`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        randomVoice: {
          url: body.randomVoice.url,
          booking: body.randomVoice.bookingURL,
          talentid: body.randomVoice.talentID
        }
      })
    })
    .then()
  }



  render() {
    let displayMe
    if (this.state.randomVoice.url === undefined) {
      displayMe = <h6>no random voice</h6>
    } else {
      displayMe =
        <MatchForm
          data={this.state.randomVoice}
          book_id={this.props.match.params.id}
        />
    }

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
        <button className="button" onClick={this.handleClick}>Generate random voice</button>
        <hr />
        {displayMe}
        <hr />
        {mappedMatches}
      </div>
    )
  }
}

export default BookShowPage;
