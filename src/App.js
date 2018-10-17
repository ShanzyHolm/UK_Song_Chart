import React, { Component } from 'react';
import SongBox from './containers/SongBox.js';


class App extends Component {
  render() {
    const genres = [
      {name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
      {name: "Alternative", url: "https://itunes.apple.com/gb/genre/music-alternative/id20?uo=2"},
      // {name: "Country", url: ""},
      {name: "Dance", url: "https://itunes.apple.com/gb/genre/music-dance/id17?uo=2"},
      {name: "Pop", url: "https://itunes.apple.com/gb/genre/music-pop/id14?uo=2"},
      // {name: "Rock", url: ""},
      {name: "Singer/Songwriter", url: "https://itunes.apple.com/gb/genre/music-singer-songwriter/id10?uo=2"},
      {name: "SoundTrack", url: "https://itunes.apple.com/gb/genre/music-soundtrack/id16?uo=2"}
    ]

    return <SongBox genres={genres}/>
  }
}

export default App;
