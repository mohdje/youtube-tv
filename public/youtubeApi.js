// eslint-disable-next-line no-unused-vars
function onYouTubeIframeAPIReady() {
  // eslint-disable-next-line no-undef
  window.YoutubePlayer = new YT.Player('youtubePlayer', {
    height: '100%',
    width: '100%',
    playerVars: { 
      disablekb: 1, 
      controls: 0,
      autoplay: 1
    },
    videoId: 'bOwsLtwa2Ts', //black screen video
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady() {
  const event = new Event("youtubePlayerReady");
  document.dispatchEvent(event);
}
