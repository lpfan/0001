/**
 * Created by vova on 23.11.2015.
 */
Template.mainmenu.events({

    "click #logOut": function(){
        "use strict";
        Meteor.logout();
        Router.go("/dashboard")
    }
})
