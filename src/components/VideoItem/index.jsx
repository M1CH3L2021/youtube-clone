import React from 'react';
import { Container } from './styles'

function VideoItem({ video, onVideoSelect }) {
  return (
    <Container onClick={() => onVideoSelect(video)}>
      <img style={{ marginRight: '20px' }} alt='thumbnail' src={video.snippet.thumbnails.medium.url} />
      <div>
        <p>{video.snippet.title}</p>
        <h5>{video.snippet.channelTitle}</h5>
      </div>
    </Container>
  );
}

export default VideoItem;