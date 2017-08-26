import React, { Component } from 'react';

class MatchTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      databaseComment: this.props.data.comment,
      newComment: this.props.data.comment
    }
  this.toggleEditMode = this.toggleEditMode.bind(this);
  this.editCommentFromMatchTile = this.editCommentFromMatchTile.bind(this);
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  this.validateTextEntry = this.validateTextEntry.bind(this);
  }

  validateTextEntry(input) {
    return (input != '' && input != null)
  }

  toggleEditMode() {
    this.setState({ editMode: !this.state.editMode })
  }

  editCommentFromMatchTile(event){
    this.setState({ newComment: event.target.value })
  }

  handleFormSubmit(event) {
    event.preventDefault();
      let updatedComment = this.state.newComment
      if (this.validateTextEntry(updatedComment)) {
        fetch(`/matched_voices/${this.props.data.id}`, {
          method: 'PATCH',
          credentials: 'same-origin',
          body: updatedComment
        })
      this.setState({ editMode: false, databaseComment: updatedComment })
    } else {
      this.setState({ newComment: "Please enter a comment" })
    }
  }

  render() {
    let comment;
    if (this.state.editMode) {
      comment = <form onSubmit={this.handleFormSubmit}>
        <label htmlFor={this.state.newComment}>
          <input
            name="comment"
            onChange={this.editCommentFromMatchTile}
            type="text"
            value={this.state.newComment}
          />
        </label>
      </form>
    } else {
      comment = <p className="comment">{this.state.databaseComment}</p>
    }

    return (
      <li>
        <div className="Tile IndividualMatch row">
          <div className="small-11 columns">
          <span>Narrator: <a href={this.props.data.booking}>{this.props.data.talentid}</a></span>
          </div>
          <div className="small-1 columns">
            <i onClick={this.props.deleteMatch} className="fa fa-times fa-lg"></i>
            <i onClick={this.toggleEditMode} className="fa fa-pencil-square-o fa-lg"></i>
          </div>
          <p className="demographic">Demographic: {this.props.demo}</p>

          <audio controls>
            <source src={this.props.data.url} />
            Your user agent does not support the HTML5 Audio element.
          </audio>
          {comment}
        </div>
      </li>
    )
  }
}

export default MatchTile;
