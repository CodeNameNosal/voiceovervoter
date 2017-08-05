import React from 'react'
import { Link } from 'react-router-dom'

const BookTile = props => {
  return (
    <div className="small-6 columns panel">
    <Link to={`books/${props.book.id}`}>
      <div>
        <p className='BookTile-title'>"{props.book.title}"</p>
        <p className='BookTile-author'>by {props.book.author}</p>
      </div>
    </Link>
    <p onClick={props.deleteBook}>DELETE book</p>
    </div>
  )
}

export default BookTile;
