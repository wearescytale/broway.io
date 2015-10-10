Template.meetup.helpers({
    meetup: function () {
        return Integrations.findOne({key: "meetup"});
    },
    categories: function () {
        return Categories;
    }
});

Template.meetup.events({
    "submit": function (event) {
        event.preventDefault();

        // Get value from form element
        var form       = event.target,
            enabled    = $(form.enabled).prop("checked"),
            token      = form.token.value,
            city       = form.city.value,
            country    = form.country.value,
            categories = form.categories,
            radius     = form.radius.value,
            metrics    = form.metrics.value;

        // console.log(JSON.stringify($(form).serializeArray()));
        console.log(categories);

        var meetup        = Integrations.findOne({key: "meetup"}) || {};
        meetup.key        = "meetup";
        meetup.enabled    = enabled;
        meetup.token      = token;
        meetup.city       = city;
        meetup.categories = [];
        meetup.radius     = radius;
        meetup.metrics    = metrics;
        meetup.updatedAt  = new Date();

        if (meetup._id) {
            Integrations.update({_id: meetup._id}, meetup);
        } else {
            meetup.createdAt = new Date();
            Integrations.insert(meetup);
        };
    }
  });