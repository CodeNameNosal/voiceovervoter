import React from 'react'

const MatchForm = ({ data }) => {
  return (
    <div className="MatchForm">
      <audio controls>
          <source src={data.url} />
          Your user agent does not support the HTML5 Audio element.
      </audio>
      <p>This will be a form!</p>
    </div>
  )
}

export default MatchForm;
