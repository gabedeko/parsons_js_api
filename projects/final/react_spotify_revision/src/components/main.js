import React, { useState, useContext, useEffect } from 'react'

import MainLeft from '../components/mainLeft' 
import MainMid from '../components/mainMid' 
import MainRight from '../components/mainRight' 

import axios from 'axios'
import { Credentials } from './credentials'

function Main(props) {

  const [mounted, setMounted] = useState(false);


  const spotify = Credentials();
  //console.log('client id in main is ' + spotify.ClientId);

  const [token, setToken] = useState('');

  //console.log("the sessionToken in main.js is " + props.sessionToken);

  const [playlists, setPlaylists] = useState([]);
  
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


  //let hmm = parentToChild;

  //console.log("this is from the main page " + hmm);

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