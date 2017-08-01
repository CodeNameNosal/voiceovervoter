import React from 'react'
import { Link } from 'react-router-dom'

const BookTile = ({ book }) => {
  return (
    <div>
      <p className='BookTile-title'>{book.title}</p>
      <p className='BookTile-author'>{book.author}</p>
    </div>
  )
}

export default BookTile;
