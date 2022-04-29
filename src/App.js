import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddMeetup from "./components/AddMeetup/AddMeetup";
import Header from "./components/header/Header";
import Meetups from "./components/meetups/Meetups";

const App = () => {
  const INITIAL_MEETUPS = [
    {
      "id": 1,
      "title": "Python conf",
      "address": "Thoughtworks, Pune",
      "description": "Conf made for Python lovers!",
      "image": "https://officechai.com/wp-content/uploads/2015/12/TWs11_Conductin-Workshops-1.jpg"
    },
    {
      "id": 2,
      "title": "Kotlin conf",
      "address": "Thoughtworks, Bangalore",
      "description": "Join us if you love Kotlin!",
      "image": "https://officesnapshots.com/wp-content/uploads/2018/04/thoughtworks-offices-1-700x466.jpg"
    },
    {
      "id": 3,
      "title": "Golang conf",
      "address": "Thoughtworks, Hydrabad",
      "description": "Join us if you feel the speed!",
      "image": "https://fastly.4sqi.net/img/general/width960/8139000_zHjotsRagKPWICibW8yFSU2pC7UnObw9JADx3LdkaQc.jpg"
    }
  ]
  let [meetups, setMeetups] = useState(INITIAL_MEETUPS)
  const navigate = useNavigate();

  const addMeetupHandler = () => {
    navigate('/add-new-meetup')

  }

  const closeMeetupHandler = () => {
    navigate('/')
  }

  const newMeetupHandler = (meetup) => {
    setMeetups([...meetups, {
      id: meetups.length + 1,
      title: meetup.title,
      address: meetup.address,
      description: meetup.description,
      image: meetup.image
    }])
    navigate('/')
  }

  return (
    <div>
      <Header addMeetupHandler={addMeetupHandler} showMeetups={closeMeetupHandler} />
      <Routes>
        <Route path="/" element={
          <Meetups meetups={meetups} />
        }></Route>
        <Route path="/add-new-meetup" element={
          <AddMeetup newMeetupHandler={newMeetupHandler} />
        } />
      </Routes>
    </div>
  );
}

export default App;
