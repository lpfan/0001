/**
 * Created by vova on 23.11.2015.
 */
Template.mainmenu.events({

    "click #logOut": function(){
        "use strict";
       Meteor.call("logout", Meteor.userId());
        Router.go("/dashboardClient")
    }
})
