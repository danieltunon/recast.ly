// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer exampleVideo={exampleVideoData[0]} />
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={exampleVideoData} />
//     </div>
//   </div>
// );
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentVideo: props.videos[0],
      videoList: props.videos
    };

  }

  clickHandler(clickedMovie) {
    this.setState({
      currentVideo: clickedMovie
    });
    console.log(this);
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} handler={this.clickHandler.bind(this)}/>
        </div>
      </div>
    );
  }

}


// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer exampleVideo={exampleVideoData[0]} />
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={exampleVideoData} />
//     </div>
//   </div>
// );




ReactDOM.render(<App videos={exampleVideoData}/>, document.getElementById('app'));