import React, { Component } from 'react';
import SongList from '../components/SongList.js';

class SongBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };

  }

  componentDidMount(){
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      this.setState({songs: data.feed.entry});
    })
  }

  render(){
    return (
      <div className="song-box">
        <h1>Music Chart</h1>
        <SongList songs={this.state.songs} />
      </div>
    )
  }

}
export default SongBox;
