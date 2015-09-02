function getFacebookCount() {
  $.getJSON('https://graph.facebook.com/fql?q=SELECT%20like_count,%20total_count,%20share_count,%20click_count,%20comment_count%20FROM%20link_stat%20WHERE%20url%20=%20%22https://www.facebook.com/pages/HovyTech/755340597847731%22', function(data) {
    var facebook = data.data[0].total_count;
    $('#facebook-count').text(facebook);
  });
}
getFacebookCount();
function getTwitterCount() {
  $.getJSON('http://urls.api.twitter.com/1/urls/count.json?url=https://twitter.com/HovyTech&callback=?', function(data) {
    var twitter = data.count;
    $('#twitter-count').text(twitter);
  });
}
getTwitterCount();
function getYouTubeCount() {
  $.getJSON('http://gdata.youtube.com/feeds/api/users/hovytech?alt=json', function(data) {
    var youtube = data.entry.yt$statistics.subscriberCount;
    $('#youtube-count').text(youtube);
  });
}
getYouTubeCount();
