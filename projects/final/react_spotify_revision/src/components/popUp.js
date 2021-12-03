import React, { useState, useContext } from 'react' 

function PopUp(props) {
  
  const initialFormData = Object.freeze({
    user_id: ""
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  function handleSubmit(event) {
    event.preventDefault();

    props.onSubmit(formData);

    document.querySelector(".popup-container").classList.add('hide-popup');
    //console.log('you said ', formData);
    // ... submit to API or something

  }

  return (
    <div className="popup-container">
      <div className="popup-box">
        <div className="popup-content">
              <div className="popup-header">
                  <h3 className="popup-title">Testing</h3>
              </div>
              <form name="getSpotifyPlaylists" action="" id="getSpotifyPlaylists" className="popup-content spotify-playlist-form" >
                  <input type="hidden" id='hidden_token' />
          
                  <p htmlFor="SearchBox">Enter Spotify username or ID:</p>
                  <input type="text" name="user_id" id="userId" className="user-info-input" onChange={handleChange}  />
                              
                  <button type="submit" id="btn_submit" className="s-btn-0" onClick={handleSubmit}>Get Playlists</button>        
              </form>
          </div>
      </div>
    </div>
    
  )
}

export default PopUp