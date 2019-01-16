import React from 'react';
import Song from '../Components/Song.js';
import SongList from '../Components/SongList.js';

class SongContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
  }


  componentDidMount(){
  const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener("load", ()=>{
    if (request.status !== 200){
      return
    }
    const jsonString = request.responseText;
    const data = JSON.parse(jsonString);
    this.setState({songs: data.feed.entry})
  })
  request.send();
}


render(){
  return(
    <div>
    <h1>Songs:</h1>
    <SongList songs={this.state.songs} />
    </div>
  )
}

}

export default SongContainer;
