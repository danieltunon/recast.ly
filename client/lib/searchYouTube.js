var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    data: {
      key: YOUTUBE_API_KEY,
      q: query,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true',
      maxResults: 5
    },
    success: function(data) { callback(data.items); },
    error: function(e) { console.dir(e); }
  });
};


window.searchYouTube = searchYouTube;