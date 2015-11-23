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
