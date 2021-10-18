import axios from 'axios'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { 
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyDDFwXZTfFi3IWcM4YziyrY2ztvOvS1k8k'
    }
})