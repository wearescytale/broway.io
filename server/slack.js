Router.route('/webhooks/slack', { where: 'server' })
  .post(function () {
    var request = this.request;
    var payload = request.body;
    var message = slackWebHookService.getMessage(payload);

    Messages.insert(message);

    var response = this.response;

    response.writeHead(204);
    response.end();

  });