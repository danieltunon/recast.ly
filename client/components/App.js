// import { debounce} from 'lodash';
// import react, {Component} from 'react';
// import {debounce} from 'throttle-debounce';
// var _ = require('lodash');

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentVideo: {
        id: {videoId: ''},
        snippet: {
          title: 'No video is loaded',
          description: 'No description'
        } 
      },
      videoList: []
    };

  }

  clickHandler(clickedMovie) {
    this.setState({
      currentVideo: clickedMovie
    });
  }
  



  searchHandler(text) {
    searchYouTube(text, (data) => this.setState({
      currentVideo: data[0],
      videoList: data
    }));
  }

  componentDidMount() {
    searchYouTube('banana', (data) => this.setState({
      currentVideo: data[0],
      videoList: data
    }));
  }

  render() {
    return (
      <div>
        <Nav change={_.debounce(this.searchHandler.bind(this), 400)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} click={this.clickHandler.bind(this)} />
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));