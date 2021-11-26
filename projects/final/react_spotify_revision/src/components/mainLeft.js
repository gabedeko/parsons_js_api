import React, { useState, useContext } from 'react'

import ProfileBox from '../components/profileBox' 
import ClipContainer from '../components/clipContainer' 

function MainLeft() {

  return (
    <div id='main-left' className="main-left">
        <ProfileBox />
        <ClipContainer />
    </div>
  )
}

export default MainLeft