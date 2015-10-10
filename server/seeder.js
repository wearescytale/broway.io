Meteor.startup(function() {

    // Add this if you want to remove all messages before seeding
    Messages.remove({});

    Messages.insert({
        type: 'text',
        data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        author: 'Nelson',
        origin: 'Faker',
        timestamp: new Date('1444486373')
    });

    Messages.insert({
        type: 'video/youtube',
        data: 'https://www.youtube.com/watch?v=oCQbC818KKU',
        author: 'Veiga',
        origin: 'Faker',
        timestamp: new Date('1444486464')
    });

    Messages.insert({
        type: 'image',
        data: 'https://demeliou.files.wordpress.com/2013/02/lord-of-the-rings-movie.jpg',
        author: 'Cristiano',
        origin: 'Faker',
        timestamp: new Date('1444486558')
    });
});