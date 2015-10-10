Template.screens.helpers({
    messages: Messages.find({}),

    isText: function(type) {
        return type === 'text';
    },

    isVideo: function(type) {
        return type === 'video';
    },
    
    isImage: function(type) {
        return type === 'image';
    }
});
