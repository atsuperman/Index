// Array of video URLs in the playlist
var playlist = [
    "https://example.com/video1.mp4",
    "https://example.com/video2.mp4",
    "https://example.com/video3.mp4"
];

// Get the video player element
var videoPlayer = document.getElementById("videoPlayer");

// Index to keep track of the current video being played
var currentVideoIndex = 0;

// Function to play the next video in the playlist
function playNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % playlist.length;
    videoPlayer.src = playlist[currentVideoIndex];
    videoPlayer.play();
}

// Play the first video when the page loads
videoPlayer.src = playlist[currentVideoIndex];
videoPlayer.play();

// Event listener to play the next video when the current one ends
videoPlayer.addEventListener("ended", playNextVideo);
