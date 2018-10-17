import React from 'react';

const Song = (props) => {
  console.log(props);
  return (
  <div>
    <h2>{props.position}.  {props.title}</h2>
    <h4>{props.artist}</h4>
  </div>)
}

export default Song;
