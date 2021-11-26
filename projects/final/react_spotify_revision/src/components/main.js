import React, { useState, useContext } from 'react'

import MainLeft from '../components/mainLeft' 
import MainRight from '../components/mainRight' 

function Main() {

  return (
    <div id='main-section' className="main">
        <MainLeft />
        <MainRight />
    </div>
  )
}

export default Main