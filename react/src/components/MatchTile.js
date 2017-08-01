import React from 'react'

const MatchTile = ({ data }) => {
  return (
    <div>
      <p>{data.comment}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default MatchTile;
