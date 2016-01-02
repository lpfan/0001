/**
 * Created by vova on 20.11.2015.
 */
Accounts.config({
   forbidClientAccountCreation: true
});
if(!Meteor.users.find().fetch()) {
    var username = "admin",
        email = "myMail@mail.com",
        password = "vova";
    Meteor.call("createUsers", username, email, password);
    Meteor.users.update(userId, {$set: {
        roles: {admin: true}
    }})

}

Meteor.methods({
    constants: function () {
        return {
            sessionName: "prob"
        };
    }
});

