import React from 'react'

const Meetup = (props) => {
  
  const showDetailsHandler = () => {
    props.showDetailedMeetup(props.id)  
  }  

  return (
    <div>
        <h2>{props.title}</h2>
        <p>{props.address}</p>
        <p><img height="40%" width="50%" alt="" src={props.image} /></p>
        <button onClick={showDetailsHandler}>Show details</button>
    </div>
  )
}

export default Meetup