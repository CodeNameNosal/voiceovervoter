import React from 'react'

const MatchTile = ({ data }) => {
  return (
    <div className="MatchTile">
      <p>Talentid: <a href={data.booking}>{data.talentid}</a></p>

      <audio controls>
          <source src={data.url} />
          Your user agent does not support the HTML5 Audio element.
      </audio>
      <p>{data.comment}</p>
    </div>
  )
}

export default MatchTile;
