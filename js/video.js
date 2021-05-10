 function playVideo(videoBlock) {
    $(videoBlock).on('click', function() {
        const video =  $(`${videoBlock}--mp4`).get(0);

        if (video.paused) {
            video.play();
            $('#play').hide();
            $('#pause').show();
        } else {
            video.pause();
            $('#play').show();
            $('#pause').hide();
        }
    
    });

 }





