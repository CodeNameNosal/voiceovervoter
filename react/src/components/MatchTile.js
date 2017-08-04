import React from 'react'

const MatchTile = props => {
  return (
    <div className="small-12 large-6 columns MatchTile">
      <p>Narrator: <a href={props.data.booking}>{props.data.talentid}</a></p>

      <audio controls>
          <source src={props.data.url} />
          Your user agent does not support the HTML5 Audio element.
      </audio>
      <p>{props.data.comment}</p>

      <p onClick={props.deleteMatch}>Delete this match?</p>

    </div>
  )
}

export default MatchTile;
