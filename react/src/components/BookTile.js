import React from 'react'
import { Link } from 'react-router-dom'

const BookTile = ({ book }) => {
  return (
    <Link to={`books/${book.id}`}>
      <div className="small-6 columns panel">
        <p className='BookTile-title'>"{book.title}"</p>
      <p className='BookTile-author'>by {book.author}</p>
    </div>
  </Link>
  )
}

export default BookTile;
