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
        talentid: undefined,
        demographics: undefined
      }
    }
  this.handleClick = this.handleClick.bind(this)
  this.handleNewItems = this.handleNewItems.bind(this)
  this.deleteMatch = this.deleteMatch.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/books/${this.props.match.params.id}`,{
      credentials: "same-origin"
    })
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


    fetch(`/api/v1/books/${this.props.match.params.id}/matched_voices`,{
      credentials: "same-origin"
    })
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
    fetch(`/api/v1/voicebunnies/randomVoice`,{
      credentials: "same-origin"
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        randomVoice: {
          url: body.randomVoice.url,
          booking: body.randomVoice.bookingURL,
          talentid: body.randomVoice.talentID,
          demographics: body.randomVoice.genderAndAge
        }
      })
    })
    .then()
  }

  handleNewItems(data){
    this.setState({
      relevantMatches: data.matches,
      randomVoice: {
        url: undefined
      }
    })
  }

  deleteMatch(id){
    if(confirm('Delete this match?')) {
      fetch(`/matched_voices/${id}`, {
        method: 'DELETE',
        credentials: 'same-origin'
      })
      .then(response => response.json())
      .then(data => {
        this.handleNewItems(data)
      })
    }
  }

  readableDemo(input){
    const demoHash = {
      childBoy: "Male Child",
      teenageBoy: "Male Teenager",
      youngAdultMale: "Young Adult Male",
      middleAgeMale: "Middle Age Male",
      seniorMale: "Senior Male",
      childGirl: "Female Child",
      teenageGirl: "Female Teenager",
      youngAdultFemale: "Young Adult Female",
      middleAgeFemale: "Middle Age Female",
      seniorFemale: "Senior Female"
    };
    let output = demoHash[input]
    return output
  }

  render() {
    let displayMatchForm = ""
    if (this.state.randomVoice.url !== undefined) {
      let demo = this.readableDemo(this.state.randomVoice.demographics)
      displayMatchForm =
        <MatchForm
          handleNewItems={this.handleNewItems}
          data={this.state.randomVoice}
          book_id={this.props.match.params.id}
          demo={demo}
        />
    }

    let mappedMatches = this.state.relevantMatches.map(match => {
      let demo = this.readableDemo(match.demographics)
      let individualDelete = () => { this.deleteMatch(match.id) }

    return(
      <MatchTile
        key={match.id}
        data={match}
        deleteMatch={individualDelete}
        demo={demo}
      />
    )
  })
    return(
      <div className='BookShowPage'>
        <div className='DisplayBookInfo'>
          <h1 className='BookShowPage-title'>"{this.state.book.title}"</h1>
          <h3 className='BookShowPage-author'>by {this.state.book.author}</h3>
          <br />
          <a href={`/books/${this.props.match.params.id}/edit`}>Edit this book?</a>
          <br />
          <button className="panel" onClick={this.handleClick}>Generate random voice</button>
          {displayMatchForm}
        </div>
        <br />
        <div className="row">
        {mappedMatches}
        </div>
      </div>
    )
  }
}

export default BookShowPage;
