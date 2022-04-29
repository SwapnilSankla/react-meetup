import React, { useState } from 'react'
import DetailMeetup from '../detail-meetup/DetailMeetup'
import Meetup from '../meetup/Meetup'
import styles from './Meetups.module.css'

const Meetups = (props) => {
    let [detailedMeetup, setDetailedMeetup] = useState(undefined)

    const showDetailedMeetupHandler = (id) => {
        detailedMeetup = props.meetups.find(meetup => meetup.id === id)
        setDetailedMeetup(detailedMeetup)
    }

    const closeDetailedMeetupHandler = () => {
        setDetailedMeetup(undefined)
    }

    return (
        <div className={styles.meetups}>
            {!detailedMeetup && <ul>
                {
                    props.meetups.map(meetup => {
                        return <Meetup
                            key={meetup.id}
                            showDetailedMeetup={showDetailedMeetupHandler}
                            id={meetup.id}
                            title={meetup.title}
                            address={meetup.address}
                            description={meetup.description}
                            image={meetup.image}
                        />
                    })
                }
            </ul>
            }
            {detailedMeetup && <DetailMeetup
                title={detailedMeetup.title}
                address={detailedMeetup.address}
                description={detailedMeetup.description}
                image={detailedMeetup.image}
                closeDetailedMeetup={closeDetailedMeetupHandler} />
            }
        </div>
    )
}

export default Meetups