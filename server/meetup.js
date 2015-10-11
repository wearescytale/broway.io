var fetchNewMeetups = function () {
    try {
        var meetup = Integrations.findOne({key: "meetup"})
        
        if (!meetup.enabled) {
            return;
        }
        
        if (meetup.metrics == 'km') {
            meetup.radius = meetup.radius / 1.609344;
        }

        var result = HTTP.call("GET", "https://api.meetup.com/2/open_events",
            {
                params: {
                    city: meetup.city,
                    country: meetup.country,
                    format: 'json',
                    'photo-host': 'public',
                    page: 20,
                    radius: meetup.radius,
                    category: meetup.categories,
                    sign: true,
                    desc : false,
                    status : 'upcoming',
                    key: meetup.token,
                }
            });

        var events = result.data.results;

        _.each(events, function(value, key, list) {
           var event = {
               type: 'meetup',
               id: value.id,
               name: value.name,
               time: value.time,
               description: value.description,
               venue: {
                   city: value.venue.city,
                   state: value.venue.state,
                   country: value.venue.country,
               },
               distance: value.distance,
               origin: {
                   type: 'meetup',
                   meta: {}
               }
           };
           
           if (meetup.metrics == "km") {
               event.distance = event.distance * 1.609344;
           }
           
           if (value.short_link) {
               event.short_link = value.short_link;
           }

           if (value.simple_html_description) {
               event.simple_html_description = value.simple_html_description;
           }

           if (value.photo_url) {
               event.photo_url = value.photo_url;
           }

           Messages.update({id: event.id}, event, {upsert: true}, function(error, nrAffected) {

               if (error) {
                   console.log(error);
                   return;
               }
           });
        });
    } catch (e) {
        console.log(e);
        return false;
    }
}


var cron = new Meteor.Cron( {
    events:{
    "* * * * *"  : fetchNewMeetups
    }
});
<<<<<<< HEAD
=======


Meteor.methods({
    getMeetupCategories: function(apiToken) {
        
        
        try {
            var result =  HTTP.call("GET", "https://api.meetup.com/2/categories",
            {
                params: {
                    sign: true,
                    key: apiToken,
                }
            });
    
            return result.data.results;
        }
        catch (e) {
            return [];
        }
   },
    
});
>>>>>>> Added settings for meetup
