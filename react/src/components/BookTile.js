import React from 'react'
import { Link } from 'react-router-dom'

class BookTile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
    let possible_goodreads_link
    if (this.props.book.goodreads_cover) {
      possible_goodreads_link = <a href="https://www.goodreads.com/">Cover from Goodreads</a>;
    }
    
    return (
      <div className="BookTile row">
        <div className="small-3 columns">
          <img className='BookTile-image' src={this.props.book.cover} />
          <br />
          {possible_goodreads_link}
        </div>
        <Link to={`books/${this.props.book.id}`}>
        <div className="small-8 columns">
          <h2 className='BookTile-title'>"{this.props.book.title}"</h2>
          <br />
          <h4 className='BookTile-author'>by {this.props.book.author}</h4>
        </div>
        </Link>
        <div className="small-1 columns editAndDeleteIcons">
          <p onClick={this.props.deleteBook}><i className="fa fa-times fa-3x" ></i></p>
          <a href={`/books/${this.props.book.id}/edit`}><i className="fa fa-pencil-square-o fa-3x" ></i></a>
        </div>
      </div>
    )
  }
}

export default BookTile;
