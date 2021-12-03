import React, { useState, useContext, useEffect } from 'react'

import axios from 'axios'
import { Credentials } from './credentials'

function MainMid(props) {
    
  const [mounted, setMounted] = useState(false);
  const spotify = Credentials();



  const DOMElements = {
    playlistTrackSection: '#playlist-tracks-section',
  }

useEffect(() => {
  if (!mounted) {
    setMounted(true);
    return;
  }
  axios(`https://api.spotify.com/v1/playlists/${props.playlistResponse[0].id}`, {
          method: 'GET',
          headers: { 
            'Accept': 'application/json',
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer ' + props.sessionToken
          }
        })
  .then (getSinglePlaylistResponse => {

    let x = 1;

    getSinglePlaylistResponse.data.tracks.items.forEach((element, index)=> {
      console.log(element.track.name); 

      const html = `<a href="${element.track.external_urls.spotify}" target="_blank" class="playlist-tracks-item" style="background-image:url(${element.track.album.images[0].url})">`
      + `<div class="playlist-item-bg" >`
      + `<div class="playlist-track-num">`
      + `<h4>#${x}</h4>`
      + `</div>`
      + `<div class="playlist-track-names">`
      + `<h4 class="" value="${element.track.name}">${element.track.name}</h4>`
      + `<h4>${element.track.album.artists[0].name}</h4>`
      + `</div>`
      + `<div class="playlist-track-more"><h4>Listen</h4></div>`
      + `</div>`
      + `</a>`;

      document.querySelector(DOMElements.playlistTrackSection).insertAdjacentHTML('beforeend',html);
      x++;
    })
    
    
    console.log(getSinglePlaylistResponse.data.tracks.items);  

  })
}, [props.playlistResponse])

  return (
    <div id="main-mid" className="main-mid">
      <div id="playlist-tracks-section" className="playlist-tracks-section">

      </div>
    </div>
  )
}

export default MainMid
