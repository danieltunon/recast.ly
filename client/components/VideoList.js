var VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map( video => 
        <VideoListEntry video={video} handler={props.handler}/>
    )}
  </div>
);

window.VideoList = VideoList;
