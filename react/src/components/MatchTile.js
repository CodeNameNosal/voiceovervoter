import React from 'react'

const MatchTile = props => {
  return (
    <li className="Tile row">
      <div className="small-11 columns">Narrator: <a href={props.data.booking}>{props.data.talentid}</a></div>
      <div className="small-1 columns"><i onClick={props.deleteMatch} className="fa fa-times fa-lg"></i></div>
      <p>Demographic: {props.demo}</p>

      <audio controls>
        <source src={props.data.url} />
        Your user agent does not support the HTML5 Audio element.
      </audio>
      <p>{props.data.comment}</p>

    </li>
  )
}

export default MatchTile;
