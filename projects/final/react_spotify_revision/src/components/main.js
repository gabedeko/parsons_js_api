import React, { useState, useContext, useEffect } from 'react'

import MainLeft from '../components/mainLeft' 
import MainMid from '../components/mainMid' 
import MainRight from '../components/mainRight' 

import axios from 'axios'
import { Credentials } from './credentials'

//Main component that contains most other components
function Main(props) {

  //Declase usestate to only run useEffect once to prevent issue
  const [mounted, setMounted] = useState(false);
  //get API credentials
  const spotify = Credentials();

  //Declase useState for playlist array
  const [playlists, setPlaylists] = useState([]);
  
  //Only runs when sessionToken is changed
  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }

    //https://api.spotify.com/v1/playlists/6BktQjwuB2zGCln2FQ2eXY
    axios(`https://api.spotify.com/v1/users/${props.submittedUser}/playlists?limit=50`, {
        method: 'GET',
        headers: { 
          'Accept': 'application/json',
          'Content-Type' : 'application/json',
          'Authorization' : 'Bearer ' + props.sessionToken
        }
      })
      .then (getPlaylistResponse => {
        //
        console.log(getPlaylistResponse.data.items);

        setPlaylists(getPlaylistResponse.data.items);

      })
  }, [props.sessionToken])

  return (
    <div id='main-section' className="main">
        <MainLeft 
          submittedUser={props.submittedUser}
          sessionToken={props.sessionToken}
          setUser={props.setUser}
          playlistTotal={playlists.length}
          playlistResponse={playlists}
        />
        
        <MainRight 
          playlistResponse={playlists}
          sessionToken={props.sessionToken}
        />
        <MainMid
          playlistResponse={playlists}
          sessionToken={props.sessionToken}
        />
    </div>
  )
}

export default Main