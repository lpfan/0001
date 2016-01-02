/**
 * Created by vova on 21.12.2015.
 */
Template.changePass.events({
    "click #confButton": function(){
        "use strict";
        var oldPass = $("#oldPass").val(),
            newPass = $("#newPass").val(),
            newPass1= $("#newPass1").val();
        if (newPass === newPass1){
            Accounts.changePassword(oldPass, newPass, function(er){
                if (er){
                    alert(er.reason);
                    $("#oldPass").val("");
                    $("#newPass").val("");
                    $("#newPass1").val("");
                }
                if (!er){
                    alert("Password was Changed");
                    Router.go("/dashboard")
                }
            })
        }else{
            alert("Error confirming new password!");
            $("#newPass").val("");
            $("#newPass1").val("");
        }
    }
})
