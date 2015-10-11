Template.meetup.helpers({
    meetup: function () {
        return Integrations.findOne({key: "meetup"});
    },
        
    settings : function() {
      return {
        // isOpen : true
      };
    },

    options: function () {
      var categories = Session.get('meetup_categories');
      return _.map(categories, function(cat){
        return {label : cat.name , value : cat.id};
      });
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

        var meetup        = Integrations.findOne({key: "meetup"}) || {};
        meetup.key        = "meetup";
        meetup.enabled    = enabled;
        meetup.token      = token;
        meetup.city       = city;
        meetup.country    = country;
        meetup.categories = Session.get('meetup_selected_categories');
        meetup.radius     = radius;
        meetup.metrics    = metrics;
        meetup.updatedAt  = new Date();

        if (meetup._id) {
            Integrations.update({_id: meetup._id}, meetup);
        } else {
            meetup.createdAt = new Date();
            Integrations.insert(meetup);
        };
    },
    
    "change #meetup-api-token" : function(event) {
        Meteor.call('getMeetupCategories', [event.target.value], function(error, data) {
            if (error) {
                console.log(error);
                Session.set('meetup_categories', false);
            }
            Session.set('meetup_categories', data);
        });
    },
    
    "change [name='selectItem']": function (event) {
        var selected_categories = Session.get('meetup_selected_categories');
        
        if (!selected_categories) {
            selected_categories = [];
        }
        
        if (event.target.checked) {
            selected_categories.push(event.target.value);    
        } else {
            var index = selected_categories.indexOf(event.target.value);
            
            if (index > -1) {
                selected_categories.splice(index, 1);
            }
        }
        
        Session.set('meetup_selected_categories', selected_categories);
        
        
    }
  });