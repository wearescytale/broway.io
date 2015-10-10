Router.route('/settings', function () {
    this.layout('settings');
    this.render('slack');
});

Router.route('/settings/meetup', function () {
    this.layout('settings');
    this.render('meetup');
});

Router.route('/settings/slack', function () {
    this.layout('settings');
    this.render('slack');
});