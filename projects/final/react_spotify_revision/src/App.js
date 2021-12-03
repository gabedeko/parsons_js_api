import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Profile from './pages/profile'

import axios from 'axios'
import { Credentials } from './components/credentials'

import PopUp from './components/popUp'

function App() {

  function onSubmitRoot(formState) {
    console.log('Your form entry from root' + formState);
    //e.preventDefault()
    fetchData(formState)
  }

  const spotify = Credentials();

  console.log('client id ' + spotify.ClientId)
  

  const [token, setToken] = useState('');
  const [playlists, setPlaylists] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []});
  const [user, setUser] = useState('');


  async function fetchData(formState) {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {
      //console.log(tokenResponse.data.access_token);
      setToken(tokenResponse.data.access_token);
      
      axios(`https://api.spotify.com/v1/users/${formState}`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then (userResponse => {
        //
        console.log(userResponse.data);
        
        setUser(userResponse.data)
        
        
      })
    })
  }

  // useEffect(() =>{
  //   axios('https://accounts.spotify.com/api/token', {
  //     headers: {
  //       'Content-Type' : 'application/x-www-form-urlencoded',
  //       'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
  //     },
  //     data: 'grant_type=client_credentials',
  //     method: 'POST'
  //   })
  //   .then(tokenResponse => {
  //     //console.log(tokenResponse.data.access_token);
  //     setToken(tokenResponse.data.access_token);

  //     axios(`https://api.spotify.com/v1/users/${theUserId}/playlists?limit=50`, {
  //       method: 'GET',
  //       headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
  //     })
  //     .then (playlistResponse => {
  //       //
  //       console.log(playlistResponse.data);
  //       setPlaylists({
  //         selectedPlaylist: playlistResponse.data.items[0].name,
  //         listOfPlaylistFromAPI: playlistResponse.data.items[0].name
  //       })

        
  //     })
  //   })
  // }, [])

  const playlistChanged = val => {
    console.log(val);
    setPlaylists({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlists.listOfPlaylistFromAPI
    });
  }

  return (
    
    <div className="App">
      <Profile 
        label="Playlist :" 
        onSubmitRoot={onSubmitRoot}
        sessionToken={token}
        setUser={user}
      />
    </div>
   
    

  );
}

export default App;
