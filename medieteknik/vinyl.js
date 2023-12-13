document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('vinyl-video');
    var loopStart = 5.3; // Time in seconds where the video should restart
    var loopEnd = 8.9;   // Time in seconds where the video should loop

    video.addEventListener('timeupdate', function() {
        // Check if the current time is greater than or equal to the loopEnd
        if (video.currentTime >= loopEnd) {
            // Set the current time to the loopStart
            video.currentTime = loopStart;
        }
    });

    video.play();
});

 // Get the audio element
 var vinyl_scratch = document.getElementById('vinyl-scratch');

 // Set a timeout to start the audio after 3 seconds
 setTimeout(function() {
     vinyl_scratch.play();
 }, 3000); // 3000 milliseconds = 3 seconds


 var jazz = document.getElementById('homepage-jazz');

 // Listen for the "ended" event on the first audio
 vinyl_scratch.addEventListener('ended', function() {
    // Play the second audio when the first one ends
    jazz.play();
});