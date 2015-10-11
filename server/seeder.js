Meteor.startup(function() {
    // Add this if you want to remove all messages before seeding
    Messages.remove({});

    Messages.insert({
        type: 'text',
        data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        author: 'Nelson',
        origin: {
            type: 'slack',
            meta: {

            }
        },
        timestamp: new Date()
    });

    Messages.insert({
        type: 'image',
        data: 'https://demeliou.files.wordpress.com/2013/02/lord-of-the-rings-movie.jpg',
        author: 'Cristiano',
        origin: {
            type: 'slack',
            meta: {

            }
        },
        timestamp: new Date()
    });


    Messages.insert({
        type: 'meetup',
        description: "<p>Agenda:</p> <p>- 19h00 Início do meetup<br/>- 19h30 Primeira apresentação: TBA<br/>- 20h00 Jantar<br/>- 21h00 Segunda apresentação: TBA</p> <p>As apresentações têm duração de 30mins.</p>",
        distance: 47.46309034790039,
        id: "zltnhlytnbcc",
        name: "Porto.rb: Outubro",
        venue: {
            city: "Porto",
            country: "PT"
        },
        time: 1445450400000,
        origin: {
            type: 'meetup'
        },
        timestamp: new Date()
    });

    Messages.insert({
        type: 'image',
        data: 'http://i.perezhilton.com/wp-content/uploads/2014/07/lego-wash-up-shore-free-17-years.gif',
        author: 'Cristiano',
        origin: {
            type: 'slack',
            meta: {

            }
        },
        timestamp: new Date()
    });

    Messages.insert({
        type: 'video/youtube',
        data: 'BZP1rYjoBgI',
        author: 'Veiga',
        origin: {
            type: 'slack',
            meta: {

            }
        },
        timestamp: new Date()
    });
});
