import React, { Component } from 'react';

class MatchForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      book_id: this.props.book_id,
      url: this.props.data.url,
      talentid: this.props.data.talentid,
      booking: this.props.data.booking,
      demographics: this.props.data.demographics,
      comment: ""
    }
    this.commentStateChanger = this.commentStateChanger.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.validateTextEntry = this.validateTextEntry.bind(this);
    this.postMatchedVoice = this.postMatchedVoice.bind(this);
  }


  handleFormSubmit(event) {
    event.preventDefault();
    if (this.validateTextEntry(this.state.comment)) {
      let formPayload = {
        demographics: this.state.demographics,
        book_id: this.state.book_id,
        url: this.state.url,
        talentid: this.state.talentid,
        booking: this.state.booking,
        comment: this.state.comment
      }
      this.postMatchedVoice(formPayload);
    } else {
      this.setState({ comment: "Please enter a comment" })
    }
  }

  postMatchedVoice(event) {
    fetch(`/api/v1/books/${this.state.book_id}/matched_voices`, {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(event)
    })
    .then(response => response.json())
    .then(data => {
      this.props.handleNewItems(data)
    })
  }

  validateTextEntry(input) {
    return (input != '' && input != null)
  }

  commentStateChanger(event) {
    this.setState({ comment: event.target.value })
  }


  render() {
    return (
      <div className="MatchForm">
        <h4>You're listening to Narrator: <a href={this.props.data.booking}>{this.props.data.talentid}</a></h4>
        <h5>Demographic: {this.props.demo}</h5>
        <audio controls>
          <source src={this.props.data.url} />
          Your user agent does not support the HTML5 Audio element.
        </audio>
        <br /><br />
        <h6>Say something about this match?</h6>

        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor={this.state.comment}>
          <input
            name="comment"
            onChange={this.commentStateChanger}
            type="text"
            value={this.state.comment}
          />
        </label>
        <input className='button' type='submit' value='Submit' />
      </form>

      </div>
    )
  }
}

export default MatchForm;
