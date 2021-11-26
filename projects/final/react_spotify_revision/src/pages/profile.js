import React from 'react'

import Header from '../components/header' 
import Main from '../components/main' 
import PopUp from '../components/popUp' 

function Profile() {
    return (
        
        <div id="profile">
            <PopUp />
            <Header />
            <Main />
        </div>
    )
}

export default Profile;