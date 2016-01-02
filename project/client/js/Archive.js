/**
 * Created by vova on 01.01.2016.
 */
Template.archive.events({
    "click .more": function(){
        "use strict";
        var objectID = this._id;
        Session.set("more", objectID);
        Router.go("/more");
        event.preventDefault();
    }
})
