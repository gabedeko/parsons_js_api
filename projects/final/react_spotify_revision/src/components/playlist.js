import React, { useState, useContext, useEffect } from 'react' 

import axios from 'axios'
import { Credentials } from './credentials'

import records from '../assets/imgs/records.jpg'

function Playlist(props, {sendDataToParent}) {

  //Get API credentials
  const spotify = Credentials();

  //set HTML ID as DOMElement variable
  const DOMElements = {
    playlistSection: '#playlist-section',
  }

  //For each playlist the user has, create HTML for it
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