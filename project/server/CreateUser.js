/**
 * Created by vova on 23.11.2015.
 */
Meteor.methods({
    createUsers: function(username, email, password) {
        Accounts.createUser({
            password: password,
            username: username,
            email: email,
            createdAt: new Date()
        });
    },

    deleteUser : function(id){
        return Meteor.users.remove(id);
    }
});
Meteor.startup(function () {
    smtp = {
        username: 'admin',   // eg: server@gentlenode.com
        password: '1234',   // eg: 3eeP1gtizk5eziohfervU
        server:   'vvvooova@gmail.com',  // eg: mail.gandi.net
        port: 25
    }

    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});
