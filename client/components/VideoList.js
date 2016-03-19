var VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map( video => 
        <VideoListEntry video={video} click={props.click}/>
    )}
  </div>
);

window.VideoList = VideoList;
