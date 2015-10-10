Template.screen.helpers({
    isText: function(type) {
        return type === 'text';
    },

    isVideo: function(type) {
        return type === 'video';
    },

    isImage: function(type) {
        return type === 'image';
    },

    isFirst: function(index) {
        if (index === 0)
            return 'bw-screen__current';
    },

    fromNow: function(date) {
        return moment(date).fromNow();
    },

    classFromType: function(type) {
        console.log(type);
        
        if (type === 'text' || type === 'image') {
            return 'bw-screen__' + type;
        } else {
            return 'bw-screen__video';
        }
    }
});
