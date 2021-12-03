import React, { useState, useContext, useEffect } from 'react' 

import axios from 'axios'
import { Credentials } from './credentials'

import records from '../assets/imgs/records.jpg'

function Playlist(props, {sendDataToParent}) {

  const spotify = Credentials();

  //const [mounted, setMounted] = useState(false);

  const [singlePlaylist, setSinglePlaylist] = useState([]);

  const DOMElements = {
    playlistSection: '#playlist-section',
  }

  props.playlistResponse.forEach((element, index)=> {
    //console.log("This is from playlist " + element.images[0].url);

    if(  element.images === undefined || element.images == 0 ) {

      const html = `<div playlistId="${element.id}" class="playlist-item">`
      + `<div class="playlist-title">`
      + `<h1 class="" value="${element.name}">${element.name}</h1>`
      + `</div>`
      + `<div class="playlist-imgs">`
      + `<div class="playlist-img" style="background-image:url(${records})"></div>`
      + `</div>`
      + `</div>`;

      document.querySelector(DOMElements.playlistSection).insertAdjacentHTML('beforeend',html);
    }
    else{
      const html = `<div playlistId="${element.id}" class="playlist-item">`
      + `<div class="playlist-title">`
      + `<h1 class="" value="${element.name}">${element.name}</h1>`
      + `</div>`
      + `<div class="playlist-imgs">`
      + `<div class="playlist-img" style="background-image:url(${element.images[0].url})"></div>`
      + `</div>`
      + `</div>`;
      
      document.querySelector(DOMElements.playlistSection).insertAdjacentHTML('beforeend',html);
    }
    
    

  
      //https://api.spotify.com/v1/playlists/6BktQjwuB2zGCln2FQ2eXY
      /*
      axios(`https://api.spotify.com/v1/playlists/${element.id}`, {
          method: 'GET',
          headers: { 
            'Accept': 'application/json',
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer ' + props.sessionToken
          }
        })
        .then (getSinglePlaylistResponse => {

          
          
          console.log(getSinglePlaylistResponse.data);  

          playListArray.push(getSinglePlaylistResponse.data);
          
          console.log(getSinglePlaylistResponse.data.name);
          
          setSinglePlaylist (
            singlePlaylist.push({
              title: getSinglePlaylistResponse.data.name,
              date: `2021-09-0${index}`,
            })
          )
          
          console.log(singlePlaylist);
        })
      */
  });

  return (
    <div id="playlist-section" className="playlist-section">
      {/* Original HTML block
      <div className="playlist-item">
        <div className="playlist-title">
          <h1 className="">Playlist Title</h1>
        </div>
        <div className="playlist-imgs">
          <div className="playlist-img"></div>
          <div className="playlist-img"></div>
          <div className="playlist-img"></div>
          <div className="playlist-img"></div>
        </div>
      </div>
      */}
    </div>
  )
}

export default Playlist