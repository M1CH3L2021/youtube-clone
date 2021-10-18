import { useState } from 'react'
import { Grid } from '@material-ui/core'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'

import youtube from './api/youtube'

import './styles/global.css'
import logoImg from './assets/youtube.png'

function App() {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState()

  async function handleSubmit(searchValue) {
    const response = await youtube.get('search', {
      params: { 
        part: 'snippet',
        maxResults: 8,
        key: 'AIzaSyDDFwXZTfFi3IWcM4YziyrY2ztvOvS1k8k',
        q: searchValue
      }
    })
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
  }

  function onVideoSelect(video) {
    setSelectedVideo(video)
  }

  return (
    <Grid justifyContent="center" container spacing={2} style={{padding: '10px 2%'}}>
      <Grid item xs={12} >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="logo-container">
              <img className="logo-img" src={logoImg} alt="Youtube logo" />
              <h2>YouTube</h2>
            </div>
            <SearchBar onFormSubmit={handleSubmit}/>
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo}/>
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App