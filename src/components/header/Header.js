import React from 'react'
import styles from './Header.module.css'

const Header = (props) => {

  const addMeetupHandler = () => {
    props.addMeetupHandler()
  }

  return (
    <div className={styles.header}>
      <h1>React Meetups</h1>
      <div className={styles.container}>
        <button onClick={props.showMeetups}>Show Meetups</button>
        <button onClick={addMeetupHandler}>Add Meetup</button>
      </div>
    </div>
  )
}

export default Header