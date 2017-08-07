import React from 'react'
import { Link } from 'react-router-dom'

const BookTile = props => {
  return (
    <div className="BookTile panel row">
      <div className="small-3 columns">
        <img className='BookTile-image' src={props.book.cover} />
        <br />
        <a href="https://www.goodreads.com/">Cover from Goodreads</a>
      </div>
      <Link to={`books/${props.book.id}`}>
      <div className="small-7 columns">
        <h3 className='BookTile-title'>"{props.book.title}"</h3>
        <h5 className='BookTile-author'>by {props.book.author}</h5>
      </div>
      </Link>
      <div className="small-2 columns">
        <p onClick={props.deleteBook}>DELETE book</p>
      </div>
    </div>
  )
}

export default BookTile;
