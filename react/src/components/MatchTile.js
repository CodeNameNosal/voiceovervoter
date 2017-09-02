import React, { Component } from 'react';

class MatchTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playStatus: false,
      editMode: false,
      databaseComment: this.props.data.comment,
      newComment: this.props.data.comment
    }
  this.toggleEditMode = this.toggleEditMode.bind(this);
  this.editCommentFromMatchTile = this.editCommentFromMatchTile.bind(this);
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  this.validateTextEntry = this.validateTextEntry.bind(this);
  this.playSound = this.playSound.bind(this);
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

  playSound() {
    const player = document.querySelector(`audio[id="clip${this.props.data.id}"]`);
    if (this.state.playStatus) {
      player.pause();
      this.setState({ playStatus: false })
    } else {
      player.currentTime = 0;
      player.play();
      this.setState({ playStatus: true })
      setTimeout(function() { this.setState({ playStatus: false}); }.bind(this), (player.duration*1000));
    }
  }

  render() {
    let icon, comment;
    if (this.state.playStatus){
      icon = <i className="fa fa-stop fa-5x" aria-hidden="true"></i>
    } else {
      icon = <i className="fa fa-play fa-5x" aria-hidden="true"></i>
    }
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
        <div className="Tile IndividualMatch">
          <div className="row">
            <div className="small-3 columns centered" id={`clip${this.props.data.id}`} onClick={this.playSound}>
              {icon}
            </div>
            <div className="small-8 columns">
            <span>Narrator: <a href={this.props.data.booking}>{this.props.data.talentid}</a></span>
            <p className="demographic">Demographic: {this.props.demo}</p>
            </div>
            <div className="small-1 columns">
              <i onClick={this.props.deleteMatch} className="fa fa-times fa-lg"></i>
              <i onClick={this.toggleEditMode} className="fa fa-pencil-square-o fa-lg"></i>
            </div>
          </div>
          <div className="row">
            <div className="small-2 columns">
              <audio id={`clip${this.props.data.id}`}>
                <source src={this.props.data.url} />
                Your user agent does not support the HTML5 Audio element.
              </audio>
            </div>
            <div className="small-10 columns">
              {comment}
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default MatchTile;
