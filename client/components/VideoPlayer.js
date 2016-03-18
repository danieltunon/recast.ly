
class VideoPlayer extends React.Component { 

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.props.exampleVideo.id.videoId}`} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{this.props.exampleVideo.snippet.title}</h3>
          <div>{this.props.exampleVideo.snippet.description}</div>
        </div>
      </div>
    );

  }
}
  
window.VideoPlayer = VideoPlayer;


