Template.screens.helpers({
    messages: function() {
        return Messages.find({}, {order: {timestamp: -1}}).map(function (doc, index, cursor) {
            return _.extend(doc, {index: index});
        });
    }
});

Template.screens.onRendered(function() {
    var timeout = 10000;

    var getNext = function() {
        var messages = Messages.find({}, {order: {timestamp: -1}, limit: 2}).fetch();

        if (messages.length > 1 && messages[0].videoState !== 'playing') {
            Messages.remove({_id: messages[0]._id});
        }

        Meteor.setTimeout(function() {return getNext();}, timeout);
    };

    Meteor.setTimeout(function() {return getNext();}, timeout);
})
