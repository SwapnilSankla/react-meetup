import React from 'react'

const DetailMeetup = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.address}</p>
      <p>{props.description}</p>
      <p><img height="50%" width="65%" alt="" src={props.image} /></p>
      <button onClick={props.closeDetailedMeetup}>back</button>
    </div>
  )
}

export default DetailMeetup