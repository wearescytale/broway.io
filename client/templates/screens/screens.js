Template.screens.helpers({
    messages: function() {
        return Messages.find({}, {order: {timestamp: -1}}).map(function (doc, index, cursor) {
                return _.extend(doc, {index: index});
        });
    }
});

Template.screens.onRendered = function() {
    Meteor.setTimeout(function() {
        Messages.find({}, {order: {timestamp: -1}})
    }, 1000);
};
