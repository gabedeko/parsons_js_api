import React, { useState, useContext } from 'react' 

function PopUp() {

  return (
    <div className="popup-container">
        <div className="popup-content">
            <div className="popup-header">
                <h3 className="popup-title">Testing</h3>
            </div>
            <form name="getSpotifyPlaylists" action="" id="getSpotifyPlaylists" className="popup-content spotify-playlist-form">
                <input type="hidden" id='hidden_token' />
        
                <p for="SearchBox">Enter Spotify username or ID:</p>
                <input type="text" name="user_id" id="userId" className="user-info-input" />
                            
                <button type="submit" id="btn_submit" className="s-btn-0">Get Playlists</button>        
            </form>
        </div>
    </div>
  )
}

export default PopUp