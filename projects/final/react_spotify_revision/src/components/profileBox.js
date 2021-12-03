import React, { useState, useContext, useEffect } from 'react' 
import axios from 'axios'
import { Credentials } from './credentials'

function ProfileBox(props) {

  const [mounted, setMounted] = useState(false);
  const [gif, setGif] = useState('');

  const DOMElements = {
    profileBox: '#s-profile-box',
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

      let artist_name = getSinglePlaylistResponse.data.tracks.items[1].track.artists[0].name;
      console.log("artist name - " + artist_name);

    axios(`http://api.giphy.com/v1/gifs/search?q=music+${artist_name}&api_key=qOntlWq9Jt5KNQDn0wzCNgKPbmsio60r&limit=5`, {
      method: 'GET',
      headers: { 
        'Accept': 'application/json',
        'Content-Type' : 'application/json',
      }
    })
    .then (giphyResponse => {
      //document.getElementById("Output").innerHTML = JSON.stringify(resp.results);
      //buildUserData( resp.results );

      //console.log(giphyResponse);
      //console.log(giphyResponse.data.data[0].embed_url);    

    //console.log("from profileBox " + props.setUser.display_name);
    //console.log("from profileBox " + props.setUser.images[0].url);

    if(  props.setUser.images === undefined || props.setUser.images == 0 ) {
      const html = `<div class="s-profile-box-top s-profile-img" style="background-image:url('https://source.unsplash.com/random')">`
      + `<div class="profile-details">`
      + `<h1 class="profile-username">#${props.setUser.display_name}</h1>`
      + `<div class="mobile-details">`
      + `<h3>Public Playlists - ${props.playlistTotal}</h3>`
      + `<h3>Followers - ${props.setUser.followers.total}</h3>`
      + `<a class="profile-box-link" href="${props.setUser.external_urls.spotify}">Visit Profile</a>`
      + `</div>`
      + `</div>`
      + `</div>`
      + `<div class="s-profile-box-btm">`
      + `<div id="clip-container" class="clip-container">`
      + `<iframe src=${giphyResponse.data.data[0].embed_url} allowFullScreen></iframe>`
      + `</div>`
      + `</div>`;

      document.querySelector(DOMElements.profileBox).insertAdjacentHTML('beforeend',html);
    } else {
      const html = `<div class="s-profile-box-top s-profile-img" style="background-image:url(${props.setUser.images[0].url})">`
      + `<div class="profile-details">`
      + `<h1 class="profile-username">#${props.setUser.display_name}</h1>`
      + `<div class="mobile-details">`
      + `<h3>Public Playlists - ${props.playlistTotal}</h3>`
      + `<h3>Followers - ${props.setUser.followers.total}</h3>`
      + `<a class="profile-box-link" href="${props.setUser.external_urls.spotify}">Visit Profile</a>`
      + `</div>`
      + `</div>`
      + `</div>`
      + `<div class="s-profile-box-btm">`
      + `<div id="clip-container" class="clip-container">`
      + `<iframe src=${giphyResponse.data.data[0].embed_url} allowFullScreen></iframe>`
      + `</div>`
      + `</div>`;

      document.querySelector(DOMElements.profileBox).insertAdjacentHTML('beforeend',html);
    }

  })
  .catch(function(error) { 
    //document.getElementById("Output").innerHTML = "There was an error "+error;
    console.log("There was an error " + error);
  });

  })

  }, [props.playlistResponse])



  //console.log("this is from profilebox.js " + props.submittedUser);

  
  
  return (
    <div id="s-profile-box" className="s-profile-box"> 
        
    </div>
  )
}

export default ProfileBox



