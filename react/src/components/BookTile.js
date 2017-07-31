import React from 'react'
import { Link } from 'react-router-dom'

const BookTile = ({ book }) => {
  return (
    <div>
      <p>{book.title}</p>
      <p>{book.author}</p>
    </div>
  )
}

export default BookTile;
