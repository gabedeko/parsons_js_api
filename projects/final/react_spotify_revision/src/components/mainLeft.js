import React, { useState, useContext } from 'react'

import ProfileBox from '../components/profileBox' 
import ClipContainer from '../components/clipContainer' 

function MainLeft(props) {

  //console.log("this is from mainleft.js " + props.submittedUser);
  //console.log("the sessionToken in mainLeft.js is " + props.sessionToken);

  return (
    <div id='main-left' className="main-left">
        <ProfileBox 
          submittedUser={props.submittedUser}
          sessionToken={props.sessionToken}
          setUser={props.setUser}
          playlistTotal={props.playlistTotal}
          playlistResponse={props.playlistResponse}
        />
        {/* <ClipContainer /> */}
    </div>
  )
}

export default MainLeft