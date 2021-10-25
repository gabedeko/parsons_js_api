
// Spotify Fetch Get

// set form as variable
const form = document.getElementById('getSpotifyPlaylists');

// API controller for handling calls
const APIController = (function(){
  const clientId = ''; // Remove from repo for security purposes
  const clientSecret = ''; // Remove from repo for security purposes

  // call for Spotify token authentication
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

  // callf or getting user's playlists
  const _getPlaylists = async (token, userId) => {

    let _userId = userId;

    const result = await fetch(`https://api.spotify.com/v1/users/${_userId}/playlists?limit=50`, {
      method: 'GET',
      headers: {'Authorization' : 'Bearer ' + token}
    });
    
    const data = await result.json();
    return data;
  }

  // returns GLOBAL functions for GLOBAL use
  return {
    getSpotifyToken() {
      return _getSpotifyTokens();
    },

    getPlayLists(token, userId) {
      return _getPlaylists(token, userId);
    }
  }
})();

// UI controller for handling what content/media appears in app
const UIController = (function() {

    //object to hold references to html selectors
    const DOMElements = {
      selectGenre: '#select_genre',
      getPlaylist: '#get_playlist',
      buttonSubmit: '#btn_submit',
      hfToken: '#hidden_token',
    }

    //public methods
    return {

      // set DOM elements as variables
      inputField() {
        return {
          genre: document.querySelector(DOMElements.selectGenre),
          getPlaylist: document.querySelector(DOMElements.getPlaylist),
          submit: document.querySelector(DOMElements.buttonSubmit),
        }
      },
 
      createPlaylist(name, link, image, total) {
        //console.log(image);


        // generate playlist items with data
        if( image.length == 0 || image === undefined ) { // if playlist art does not exist use default image

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
      //stores authorization token
      storeToken(value) {
        document.querySelector(DOMElements.hfToken).value = value;
      },
      // retrieves stored token
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

  // when button is clicked trigger playlist generation
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

  // declares app has sarted
  return {
    init() {
      console.log('App is starting');
    }
  }
  
})(UIController, APIController); // app controller uses UI and API controllers

APPController.init(); // initializes app
