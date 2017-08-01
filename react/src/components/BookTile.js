import React from 'react'
import { Link } from 'react-router-dom'

const BookTile = ({ book }) => {
  return (
    <div>
      <Link to={`books/${book.id}`}>
        <p className='BookTile-title'>"{book.title}"</p>
      </Link>
      <p className='BookTile-author'>by {book.author}</p>
    </div>
  )
}

export default BookTile;
