import React from 'react';


const Song = (props) =>{
if (!props.song) return null;
  return(
    <h1>{props.song.name}</h1>
  )
}




export default Song;
