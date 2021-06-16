import React from 'react';
import { connect } from 'react-redux';

function SongDetails({ song }) {
  return (
    song && (
      <div>
        <h2>{song.title}</h2>
        <div>{song.duration}</div>
      </div>
    )
  );
}

const mapStateToProps = (state) => ({ song: state.selectedSong });

export default connect(mapStateToProps)(SongDetails);
