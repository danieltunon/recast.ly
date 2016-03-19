var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    password: YOUTUBE_API_KEY,
    dataType: 'json',
    contentType: 'application/json',
    data: options.query,
    success: function(data) {console.log(data)},
    error: function(e) {console.dir(e)}
  });
};

window.searchYouTube = searchYouTube;
