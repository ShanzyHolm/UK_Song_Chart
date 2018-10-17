import React, { Component } from 'react';
import SongList from './SongList.js';

class SongBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      song: null
    };

  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    fetch(url)
    .then((res) => res.json())
    .then((songs) => {
      this.setState({songs: songs});
    })
  }

  render(){
    return (
      <div className="song-box">
        <SongList songs={this.state.songs} />
      </div>
    )
  }

}
export default SongBox;
