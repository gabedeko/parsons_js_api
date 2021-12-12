import React, { useState, useContext } from 'react' 

//Popup component appears on load
function PopUp(props) {
  
  //Sets inital form data to nothing
  const initialFormData = Object.freeze({
    user_id: ""
  });

  //declase useState for FormData which changes on submission
  const [formData, updateFormData] = React.useState(initialFormData);

  //on change, update formData with what was entered
  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  //when submit button is clicked, push new data to parent component
  function handleSubmit(event) {
    event.preventDefault();

    //Parent component
    props.onSubmit(formData);

    //hide pop up container and show header button
    document.querySelector(".popup-container").classList.add('hide-popup');
    document.querySelector(".app-header").classList.add('reveal-close');
    //console.log('you said ', formData);

  }

  //Pop up form pushes submitted data to 
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