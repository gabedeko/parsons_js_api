import React, { useState, useContext } from 'react' 

function ProfileBox() {

  return (
    <div id="s-profile-box" className="s-profile-box"> 
        <div className="s-profile-box-top s-profile-img">
          <div className="profile-details">
            <h1 className="profile-username">Testing</h1>
            <div className="mobile-details">
              <h3>11 Public Playlist</h3>
              <h3>1 Follower</h3>
              <h3>1 FOllowing</h3>
            </div>
          </div>
        </div>
        <div className="s-profile-box-btm">
          <div className="section-container">
            <h1 className="test-title">BOX</h1>
          </div>
        </div>
    </div>
  )
}

export default ProfileBox



