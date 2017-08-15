import React from 'react'

const MatchTile = props => {
  return (
    <li>
      <div className="Tile IndividualMatch row">
        <div className="small-11 columns">
        <span>Narrator: <a href={props.data.booking}>{props.data.talentid}</a></span>
        </div>
        <div className="small-1 columns"><i onClick={props.deleteMatch} className="fa fa-times fa-lg"></i></div>
        <p className="demographic">Demographic: {props.demo}</p>

        <audio controls>
          <source src={props.data.url} />
          Your user agent does not support the HTML5 Audio element.
        </audio>
        <p className="comment">{props.data.comment}</p>
      </div>
    </li>
  )
}

export default MatchTile;
