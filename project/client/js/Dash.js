/**
 * Created by vova on 07.12.2015.
 */
Template.dashboard.events({
    "click #loginButton": function(){
        "use strict";
        $("#logBlock").css("display", "none");
        $("#clicked").css("display","inline");
    },
    "click .col-md-4": function(){
        "use strict";
        $("#clicked").css("display", "none");
        $("#logBlock").css("display","block");
    }

})
