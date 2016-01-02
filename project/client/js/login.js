/**
 * Created by vova on 07.12.2015.
 */
Template.login.events({
    "click #login": function(){
        "use strict";
        var email = $("#email").val(),
            pas = $("#pass").val();
        Meteor.loginWithPassword(email, pas, function(er){
            if(er.reason === "Incorrect password"){
                $(".pass").addClass("has-error");
                $("#pass").val("");
                console.log("password")
            }
            if(er.reason === "User not found"){
                $(".email").addClass("has-error");//css("border", "solid 3px red");
                console.log("user")
            }
            if(er.reason === "Match failed"){
                $(".email").addClass("has-error");//css("border", "solid 3px red");
                $(".pass").addClass("has-error");//css("border", "solid 3px red");
                console.log("both")
            }
        })
    },
    "keydown #pass":function(event) {
        "use strict";
        if (event.which === 13) {
            var email = $("#email").val(),
                pas = $("#pass").val();
            Meteor.loginWithPassword(email, pas, function (er) {
                if (er.reason === "Incorrect password") {
                    $(".pass").addClass("has-error");
                    $("#pass").val("");
                    console.log("password")
                }
                if (er.reason === "User not found") {
                    $(".email").addClass("has-error");//css("border", "solid 3px red");
                    console.log("user")
                }
                if (er.reason === "Match failed") {
                    $(".email").addClass("has-error");//css("border", "solid 3px red");
                    $(".pass").addClass("has-error");//css("border", "solid 3px red");
                    console.log("both")
                }
            })
        }
    },
    "focus .pass": function () {
        if ($(".pass").hasClass("has-error")){
            $(".pass").removeClass("has-error");
        }
    },
    "focus .email": function () {
        if ($(".email").hasClass("has-error")){
            $(".email").removeClass("has-error");
        }
    },
    "click #forgotPass": function(){
        "use strict";
        var email = $("#email").val();
        console.log(Accounts);
        console.log(Accounts.users);
        console.log(Accounts.users.email);
        console.log(AccountsClient.options);
        Accounts.forgotPassword({email: email}, function(er){
            console.log(er);
        });
        alert("was sent")
    }

})
