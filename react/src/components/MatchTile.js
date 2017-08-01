import React from 'react'

const MatchTile = ({ data }) => {
  // debugger;
  return (
    <div className="MatchTile">
      <p>Talentid: <a href={data.voice.booking}>{data.voice.talentid}</a></p>

      <audio controls>
          <source src={data.voice.sound} />
          Your user agent does not support the HTML5 Audio element.
      </audio>
      <p>{data.comment}</p>
    </div>
  )
}

export default MatchTile;
