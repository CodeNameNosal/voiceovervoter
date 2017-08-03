import React from 'react'

const MatchTile = ({ data }) => {
  return (
    <div className="small-12 large-6 columns MatchTile">
      <p>Narrator: <a href={data.booking}>{data.talentid}</a></p>

      <audio controls>
          <source src={data.url} />
          Your user agent does not support the HTML5 Audio element.
      </audio>
      <p>{data.comment}</p>
    </div>
  )
}

export default MatchTile;
