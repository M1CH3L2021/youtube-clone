import { Container } from './styles'

function VideoDetail({ video }) {
    if (!video) return <div>Search for a video</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <Container>
            <div style={{ height: '500px' }}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc}></iframe>
            </div>
            <footer>
                <h2>{video.snippet.title} - {video.snippet.channelTitle}</h2>
                <div>
                    <h3 variant="subtitle1">{video.snippet.channelTitle}</h3>
                    <p>
                        postado {new Intl.DateTimeFormat('pt-BR', {
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            hourCycle: 'h23'
                        }).format(new Date(video.snippet.publishedAt))}
                    </p>
                </div>
                <p variant="subtitle2">{video.snippet.description}</p>
            </footer>
        </Container>
    )
}

export default VideoDetail;