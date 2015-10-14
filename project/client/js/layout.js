/**
 * Created by vova on 10.10.2015.
 */
Template.layout.events({
    "click .oneButton":function(){
        "use strict";
        Router.go("/inventory");
    },
    "click .secondButton":function(){
        "use strict";
        Router.go("/CustomerErrors");
    }
})
