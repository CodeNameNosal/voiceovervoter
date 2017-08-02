import React, { Component } from 'react';

class MatchForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      book_id: this.props.book_id,
      url: this.props.data.url,
      talentid: this.props.data.talentid,
      booking: this.props.data.booking,
      comment: ""
    }
    this.commentStateChanger = this.commentStateChanger.bind(this);
  }



  commentStateChanger(event) {
    this.setState({ comment: event.target.value })
  }


  render() {
    // debugger
    return (
      <div className="MatchForm">
        <h3>You're listening to {this.props.data.talentid}</h3>
        <audio controls>
          <source src={this.props.data.url} />
          Your user agent does not support the HTML5 Audio element.
        </audio>
        <p>Input below:</p>

        <label htmlFor={this.state.comment}>
        <input
          name="comment"
          onChange={this.commentStateChanger}
          type="text"
          value={this.state.comment}
        />
      </label>

      </div>
    )
  }
}

export default MatchForm;
