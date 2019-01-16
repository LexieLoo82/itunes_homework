import React from 'react';
import Song from './song.js';

const SongList = (props) =>{

  render(){

  const songNodes = props.songs.map((song, index) =>{
      return <Song name={song.title} key={song.index} >
    })

  return(
    <div className="song-list">
    {songNodes}
    </div>
  )
}
}





export default SongList;
