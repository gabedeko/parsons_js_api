import React, { useState, useContext } from 'react'

import TopArtist from '../components/topArtist' 
import TopTracks from '../components/clipContainer'
import Playlist from '../components/playlist' 
import RecentArtist from '../components/recentArtist'
import Followers from '../components/followers' 
import Following from '../components/following'  

function MainRight() {

  return (
    <div id='path-container' className="main-right">
        <TopArtist />
        <TopTracks />
        <Playlist />
        <RecentArtist />
        <Followers />
        <Following />
    </div>
  )
}

export default MainRight