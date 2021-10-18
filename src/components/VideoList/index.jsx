import React from 'react';
import { Container } from './styles'

import VideoItem from '../VideoItem'

function VideoList({ videos, onVideoSelect }) {
    return(
        <Container>
            {videos.map((video, id) => <VideoItem key={id} onVideoSelect={onVideoSelect} video={video}/>)}
        </Container>
    )
}

export default VideoList;