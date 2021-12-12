import React, { useState, useContext } from 'react'


//Header functions as a refresh page function onClick
function Header() {

 function refreshPage(e) {
  window.location.reload();
 }

  return (
    <header id="app-header" className="app-header" onClick={refreshPage}>
        <div id="refresh-btn" className="refresh-btn"></div>
    </header>
  )
}

export default Header