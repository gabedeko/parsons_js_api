/////////////////
////////////////
// Callback Fetch
/*
let button0 = document.getElementById('GetUsersCallback');

button0.addEventListener("click", getUserData);

function getUserData(e) {
  e.preventDefault();

  const url = "https://randomuser.me/api/?results=1";
  const url2 = "http://api.open-notify.org/iss-now.json";

  fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then( function(data) {
        console.log('raw data',data);
        document.getElementById("Output").innerHTML = JSON.stringify(data.results[0]);
        coords = data.results[0].location.coordinates;

       return fetch(url2);
    } )
    .then( function(response) {
        return response.json();
    })
    .then(function(resp) {
        console.log('raw data',resp);
        let iss = resp.iss_position;
        document.getElementById("Output").innerHTML += `<br>ISS position is: ${iss.latitude} / ${iss.longitude}`;
        let dist = distance( coords.latitude, coords.longitude, iss.latitude, iss.longitude);
        document.getElementById("Output").innerHTML += `<br>Current distance between the two  is: ${dist} miles`;
    })
    .catch(function(error) {
        document.getElementById("Output").innerHTML = "There was an error "+error;
    });
}
*/

/////////////////
////////////////
// 10. Fetch GET
/*
let button1 = document.getElementById('GetUsers');
button1.addEventListener("click", getUserData);

function getUserData() {
  let url = "https://reqres.in/api/users";
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(resp) {
        console.log(resp);
        document.getElementById("Output").innerHTML = JSON.stringify(resp.data);
      })
      .catch(function(resp) {
        document.getElementById("Output").innerHTML = "There was an error";
      });
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Spotify Fetch Get

//const form = document.getElementById('createUser');
const form = document.getElementById('getSpotifyPlaylists');



//let button2 = document.getElementById('getSoundCloudData');
//button2.addEventListener("click", getSoundcloudData);

const APIController = (function(){
  const clientId = '';
  const clientSecret = '';

  const _getSpotifyTokens = async () => {

      let url = "https://accounts.spotify.com/api/token";
      const FD = new FormData(form);
      


      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
          },
          body: 'grant_type=client_credentials'
          })

          const data  = await response.json();
          //console.log(data);
          return data.access_token;

  }
  /*
  const _getGenres = async (token) => {

    const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });
    
    const data = await result.json();
    return data;
  }
  */
  const _getPlaylists = async (token, userId) => {

    let _userId = userId;

    const result = await fetch(`https://api.spotify.com/v1/users/${_userId}/playlists?limit=50`, {
      method: 'GET',
      headers: {'Authorization' : 'Bearer ' + token}
    });
    
    const data = await result.json();
    return data;
  }

  return {
    getSpotifyToken() {
      return _getSpotifyTokens();
    },
    /*
    getGenres(token) {
      return _getGenres(token);
    },
    */
    getPlayLists(token, userId) {
      return _getPlaylists(token, userId);
    }
  }
})();

const UIController = (function() {

    //object to hold references to html selectors
    const DOMElements = {
      selectGenre: '#select_genre',
      getPlaylist: '#get_playlist',
      // selectPlaylist: '#select_playlist',
      buttonSubmit: '#btn_submit',
      // divSongDetail: '#song-detail',
      hfToken: '#hidden_token',
      // divSonglist: '.song-list'
    }

    //public methods
    return {

      inputField() {
        return {
          genre: document.querySelector(DOMElements.selectGenre),
          getPlaylist: document.querySelector(DOMElements.getPlaylist),
          submit: document.querySelector(DOMElements.buttonSubmit),
        }
      },
      // need methods to create select list option
      /*
      createGenre(text, value) {
        const html = `<option value="${value}">${text}</option>`;
        document.querySelector(DOMElements.selectGenre).insertAdjacentHTML('beforeend', html);
      },
      */
      createPlaylist(name, link, image, total) {
        //console.log(image);

        if( image.length == 0 || image === undefined ) {

          const html = `<a href="${link}" target="_blank" class="playlist-item-container" style="background-image:url(imgs/records.jpg);">`
          + `<div class="playlist-item">`
          + `<h1 class="playlist-title" value="${name}">${name}</h1>`
          + `<h4 class="playlist-total-tracks">Total Tracks - ${total}</h4>`
          + `<h3 class="playlist-link" >Listen to Playlist</h3>`
          + `</div>`
          + `</a>`;

          document.querySelector(DOMElements.getPlaylist).insertAdjacentHTML('beforeend',html);
        } else {
          const html = `<a href="${link}" target="_blank" class="playlist-item-container" style="background-image:url(${image[0].url});">`
          + `<div class="playlist-item">`
          + `<h1 class="playlist-title" value="${name}">${name}</h1>`
          + `<h4 class="playlist-total-tracks">Total Tracks - ${total}</h4>`
          + `<h3 class="playlist-link">Listen to Playlist</h3>`
          + `</div>`
          + `</a>`;

          document.querySelector(DOMElements.getPlaylist).insertAdjacentHTML('beforeend',html);
        }
        
      },
      storeToken(value) {
        document.querySelector(DOMElements.hfToken).value = value;
      },
      getStoredToken() {
        return {
            token: document.querySelector(DOMElements.hfToken).value
        }
      }
    }
})();

const APPController = (function(UICtrl, APICtrl) {

  // get input field object ref
  const DOMInputs = UICtrl.inputField();

  /*
  const loadGenres = async () => {
    //get token
    ;
    const token = await APICtrl.getSpotifyToken();
    
    //store token onto page
    UICtrl.storeToken(token);
    //get the genres
    const genres = await APICtrl.getGenres(token);
    //console.log("genres ", genres.categories.items);
    //populate genre select element 
    
    // create genre for each item in JSON
    genres.categories.items.forEach(element => UICtrl.createGenre(element.name, element.id));
    // for (var i = 0; i < genres.categories.items.length; i++){
    //   console.log("wow");
    //   //UICtrl.createGenre(element.name, element.id)
    // }
  }
  */

  DOMInputs.submit.addEventListener('click', async (e) => {
    // prevent page reset
    e.preventDefault();

    // get token
    //const token = UICtrl.getStoredToken().token;
    const token = await APICtrl.getSpotifyToken();

    // get user ID
    const userId = form.user_id.value;
    //get playlist
    const playlist = await APICtrl.getPlayLists(token, userId);

    //create playlist for each item in JSON in UI
    console.log(playlist);

    playlist.items.forEach(element => UICtrl.createPlaylist(element.name, element.external_urls.spotify, element.images, element.tracks.total))
  });

  return {
    init() {
      console.log('App is starting');
      //Genres();
    }
  }
  
})(UIController, APIController);

APPController.init();


// /https://api.spotify.com/v1/users/{user_id}
