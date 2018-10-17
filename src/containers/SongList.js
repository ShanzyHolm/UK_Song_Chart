import React from 'react';
import Song from '../components/Song.js';

const SongList = (props) => {
  const songs = props.feed.entry.map((song) => {
    return <Song title={song.title} key={song.id}>
      {song.artist}
    </Song>
  })

  return (
    <div className="song-list">
      {songs}
    </div>
  )

}

export default SongList;
