var fetchNewMeetups = function () {
    try {
        var result = HTTP.call("GET", "https://api.meetup.com/2/open_events",
            {
                params: {
                    city: 'braga',
                    country: 'pt',
                    format: 'json',
                    'photo-host': 'public',
                    page: 20,
                    radius: 50,
                    category: "11,34",
                    sign: true,
                    desc : false,
                    status : 'upcoming',
                    key: '9657f1241185e7f156620395c92c2',
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
               distance: value.distance * 1.609344,
           }
           
           if (value.short_link) {
               event.short_link = value.short_link;
           }
           
           if (value.simple_html_description) {
               event.simple_html_description = value.simple_html_description
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
    "0 */2 * * *"  : fetchNewMeetups
    }
});