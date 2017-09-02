import React, { Component } from 'react';
import ButtonPlayer from './ButtonPlayer';
import TextareaWrapper from './TextareaWrapper';

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
    if (event.target.value.endsWith('\n')) {
      this.handleFormSubmit(event)
    } else {
      this.setState({ newComment: event.target.value })
    }
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
      comment = <TextareaWrapper
            onSubmitHandler={this.handleFormSubmit}
            onChangeHandler={this.editCommentFromMatchTile}
            valuePassed={this.state.newComment}
          />
    } else {
      comment = <p className="comment">{this.state.databaseComment}</p>
    }

    return (
      <li>
        <div className="Tile IndividualMatch">
          <div className="row">
            <div className="small-4 columns centered">
              <ButtonPlayer data={this.props.data}/>
            </div>
            <div className="small-7 columns">
            <h4>Narrator: <a href={this.props.data.booking}>{this.props.data.talentid}</a></h4>
            <p className="demographic">Demographic: {this.props.demo}</p>
            </div>
            <div className="small-1 columns">
              <i onClick={this.props.deleteMatch} className="fa fa-times fa-lg"></i>
              <i onClick={this.toggleEditMode} className="fa fa-pencil-square-o fa-lg"></i>
            </div>
          </div>
          <div>
            {comment}
          </div>
        </div>
      </li>
    )
  }
}

export default MatchTile;
