Template.contentVideo.helpers({
    valInMinutes: function(val) {
        var minutes = "0" + Math.floor(val / 60);
        var seconds = "0" + (val - minutes * 60);

        return minutes.substr(-2) + ":" + seconds.substr(-2);
    },

    barSize: function (current, duration) {
        return (current/duration)*100;
    }
});

Template.contentVideo.onRendered(function() {

    var that    = this;
    var videoID = this.data.message.data;

    onYouTubeIframeAPIReady = function () {

        var myTimer;
        // New Video Player, the first argument is the id of the div.
        // Make sure it's a global variable.
        player = new YT.Player('player', {

            height: '100%',
            width: '100%',
            videoId: videoID,
            playerVars: {
                controls: '0'
            },
            events: {

                onReady: function (event) {
                    // Play video when player ready.
                    event.target.playVideo();

                    videoName = player.getVideoData().title;

                    Messages.update({_id:that.data.message._id}, {$set: {
                            'videoName':player.getVideoData().title,
                            'videoDuration':player.getDuration(),
                            'videoCurrentTime':Math.ceil(player.getCurrentTime())
                        }
                    });
                },

                onStateChange: function (event) {

                    if(event.data==1) {
                        myTimer = Meteor.setInterval(function(){

                            Messages.update({_id:that.data.message._id}, {$set: {
                                    'videoState': 'playing',
                                    'videoCurrentTime':Math.ceil(player.getCurrentTime())
                                }
                            });
                        }, 500);

                    } else {
                        clearInterval(myTimer);

                        Messages.update({_id:that.data.message._id}, {$set: {
                                'videoState': 'stop',
                                'videoCurrentTime':Math.ceil(player.getCurrentTime())
                            }
                        });
                    }
                }
            }
        });

    };

    YT.load();
});
