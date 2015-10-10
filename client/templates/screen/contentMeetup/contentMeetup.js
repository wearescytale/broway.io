Template.contentMeetup.helpers({
    formatTime: function(time) {
        return moment(time).format('MMMM Do YYYY');
    },

    round: function(value) {
        return Math.round(value);
    }
});
