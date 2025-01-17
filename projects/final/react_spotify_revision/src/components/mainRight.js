import React, { useState, useContext, useEffect } from 'react'

import axios from 'axios'
import { Credentials } from './credentials'

import TopArtist from '../components/topArtist' 
import Playlist from '../components/playlist' 
import RecentArtist from '../components/recentArtist'
import Followers from '../components/followers' 
import Following from '../components/following'

function MainRight(props) {

  return (
    <div id='path-container' className="main-right">
        {/* <TopArtist /> */}
        {/* <TopTracks /> */}
        <Playlist 
        sessionToken={props.sessionToken}
        playlistResponse={props.playlistResponse}
        />
        {/* <RecentArtist /> */}
        {/* <Followers /> */}
        {/* <Following /> */}
    </div>
    
  )
}

export default MainRight
