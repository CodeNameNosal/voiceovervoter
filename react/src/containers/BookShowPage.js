import React, { Component }  from 'react';
import MatchTile from '../components/MatchTile';
import MatchForm from '../components/MatchForm';

class BookShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      awaitingMatchForm: false,
      MatchFormPresent: false,
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
  this.deleteCurrentBook = this.deleteCurrentBook.bind(this)
  this.loadingHandler = this.loadingHandler.bind(this)
  this.fetchBook = this.fetchBook.bind(this)
  this.fetchMatches = this.fetchMatches.bind(this)
  }

  fetchBook() {
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
  }

  fetchMatches() {
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

  componentDidMount() {
    this.fetchBook();
    this.fetchMatches();
  }

  handleClick(event) {
    this.setState({
      MatchFormPresent: false,
      awaitingMatchForm: true
    })
    fetch(`/api/v1/voicebunnies/randomVoice`,{
      credentials: "same-origin"
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        awaitingMatchForm: false,
        MatchFormPresent: true,
        randomVoice: {
          url: body.randomVoice.url,
          booking: body.randomVoice.bookingURL,
          talentid: body.randomVoice.talentID,
          demographics: body.randomVoice.genderAndAge
        }
      })
    })
  }

  loadingHandler(){
    this.setState({ awaitingMatchForm: false })
  }

  handleNewItems(data){
    this.setState({
      awaitingMatchForm: false,
      relevantMatches: data.matches,
      MatchFormPresent: false
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

  deleteCurrentBook(){
    if(confirm('Delete this current book?')) {
      fetch(`/api/v1/books/${this.props.match.params.id}`, {
        method: 'DELETE',
        credentials: 'same-origin'
      })
    }
    window.location.href= "/"
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
    if (this.state.MatchFormPresent) {
      let demo = this.readableDemo(this.state.randomVoice.demographics)
      displayMatchForm =
        <MatchForm
          handleNewItems={this.handleNewItems}
          data={this.state.randomVoice}
          book_id={this.props.match.params.id}
          demo={demo}
          loadingHandler={this.loadingHandler}
        />
    }

    let loadingString = ""
    if (this.state.awaitingMatchForm == true) {
      loadingString = <div className="centered">"Connecting to VoiceBunny..."</div>
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
        <div>
          <div className='ShowTile'>
          <div className='row'>
            <div className="small-4 columns">
              <div>
                <h1 className='BookShowPage-title'>"{this.state.book.title}"</h1>
                <h3 className='BookShowPage-author'>by {this.state.book.author}</h3>
              </div>
              <br />
                <button className="generateButton centered" onClick={this.handleClick}>Generate random voice</button>
              <br />
            </div>
            <div className="small-1 columns editAndDeleteIcons">
              <i onClick={this.deleteCurrentBook} className="fa fa-times fa-lg" ></i>
              <br />
              <a href={`/books/${this.props.match.params.id}/edit`}><i className="fa fa-pencil-square-o fa-lg" ></i></a>
            </div>
            <div className="small-7 columns">
              <div>
                {loadingString}
                {displayMatchForm}
              </div>
            </div>
          </div>
        </div>
        <ul className="small-block-grid-1 medium-block-grid-2 large-block-grid-2">
          {mappedMatches}
        </ul>
      </div>
    )
  }
}

export default BookShowPage;
