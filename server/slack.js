Router.route('/webhooks/slack', { where: 'server' })
  .post(function () {
    var request  = this.request;
    var payload  = request.body;
    var response = this.response;

    slackSettings = Integrations.findOne({key: "slack"});

    if (!payload.token || slackSettings.token !== payload.token || !slackSettings.enabled) {
        response.writeHead(400);
        response.end();
        return;
    };

    var message = slackWebHookService.getMessage(payload);
    Messages.insert(message);

    response.writeHead(204);
    response.end();
  });