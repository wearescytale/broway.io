Template.slack.helpers({
    slackIntegration: function () {
        return Integrations.findOne({key: "slack"});
    }
});

Template.slack.events({
    "submit": function (event) {
        event.preventDefault();

        // Get value from form element
        var form = event.target,
            token = form.token.value,
            enabled = $(form.enabled).prop("checked");

        var integration       = Integrations.findOne({key: "slack"}) || {};
        integration.key       = "slack";
        integration.token     = token;
        integration.enabled   = enabled;
        integration.updatedAt = new Date();

        if (integration._id) {
            Integrations.update({_id: integration._id}, integration, {upsert: true});
        } else {
            integration.createdAt = new Date();
            Integrations.insert(integration);
        };
    }
  });