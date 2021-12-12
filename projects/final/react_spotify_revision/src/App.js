import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Profile from './pages/profile'

import axios from 'axios'
import { Credentials } from './components/credentials'

function App() {

  //use form from popUp to send data from child to parent
  function onSubmitRoot(formState) {
    console.log('Your form entry from root' + formState);
    //e.preventDefault()
    fetchData(formState)
  }

  //Get credentials
  const spotify = Credentials();

  //console.log('client id ' + spotify.ClientId)
  
  //declaure useState for API token
  const [token, setToken] = useState('');

  //declare useState for user API response
  const [user, setUser] = useState('');

  //Run spotify API token call
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
        //show response data
        console.log(userResponse.data);
        
        //set response data as prop
        setUser(userResponse.data)
        
        
      })
    })
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
