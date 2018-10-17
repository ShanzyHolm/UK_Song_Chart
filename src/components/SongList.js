import React from 'react';
import Song from './Song.js';

const SongList = (props) => {
  // console.log(props);
  if(!props.songs){
    return <p>Loading Songs...</p>
  }

  const allSongs = props.songs.map((song, index) => {
    return (<Song
      key={index}
      position={index + 1}
      title={song["im:name"]["label"]}
      artist={song["im:artist"].label}
            />)
      })

      return(
      <div>
        <h1>In Chart List</h1>
        {allSongs}
      </div>
      )

      }

      export default SongList;


      // const songs = props.data.feed.entry.map((song) => {
      //   return <Song title={song.title} key={song.id}>
      //     {song.artist}
      //   </Song>
      // })
      //
      // return (
      //   <div className="song-list">
      //     {songs}
      //   </div>
      // )


      //thinks this im:name is a key, value pair if not in square brackets
