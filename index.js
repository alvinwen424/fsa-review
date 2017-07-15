var models = require('./models');
var Page = require('./models/page')
var User = require('./models/user');
var app = require('./app');

User.sync()
    .then(function () {
        return Page.sync();
    })
    .then(function () {
        app.listen(3001, function () {
            console.log('Server is listening on port 3001!');
        });
    });

