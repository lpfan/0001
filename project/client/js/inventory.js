/**
 * Created by vova on 29.09.2015.
 */
var customers = new Mongo.Collection("customers"),
    problems = [];
Session.set("prob", "");
Template.inventory.events({

    "click #cancel": function(){
        "use strict";
        location.assign("http://localhost:3000/index.html");
        location.reload(true);
    },

    "click .form": function(event){
        "use strict";
        if ($(event.target).css("background-color") === "rgb(255, 0, 0)"){
            $(event.target).css("background-color", "rgb(221, 221, 221)");
        }
        else{
            $(event.target).css("background-color", "rgb(255, 0, 0)");
        }
    },

    "click #else": function(){
        "use strict";
        var problem = $("#elseInput").val().trim();
        if (problem) {
            Session.set("prob", problem);
        }
        $("#elseInput").val("");
    },

    "click #add":function(){
        "use strict";
        var bike = $("#bikeName").val().trim(),
            name = $("#name").val().trim(),
            phone =$("#phone").val().trim(),
            deadline = $("#deadline").val().trim(),
            price = $("#price").val().trim(),
            troubles = {};
        $(".form").each(function(){
            if ($(this).css("background-color") === "rgb(255, 0, 0)"){
                troubles[$(this).text()] = false;
            }
        });
        problems.forEach(function(trouble){
            troubles[trouble] = false;
        });
        customers.insert({
            bike: bike,
            name: name,
            phone: phone,
            deadline: deadline,
            price: price,
            troubles: troubles
        });
        problems.splice(0,problems.length);
        location.assign("http://localhost:3000/index.html");
        location.reload(true);
    },

    "mousedown p": function(event){
        "use strict";
        var edit = $(event.target).text(), k;

        if (event.which === 1){
            var input = $("#elseInput");
            problems.splice(problems.indexOf(edit), 1);

            if (input.val().trim()){
                var problem = input.val().trim();
                Session.set("prob", problem);
                input.val(edit);
                input.focus();
            }

            else{
                input.val(edit);
                input.focus();

                if (problems.length % 2 === 1){
                    k = "controlTroublesNumber1";
                }

                else{
                    k = "controlTroublesNumber2";
                }
                Session.set("prob", k);
            }
        }
        else{
            problems.splice(problems.indexOf(edit), 1);

            if (problems.length % 2 === 1){
                k = "controlTroublesNumber1";
            }

            else{
                k = "controlTroublesNumber2";
            }
            Session.set("prob", k);
        }
    }
});

Template.inventory.helpers({
    problem: function(){
        var a = Session.get("prob");

        if ((a) && (a !== "controlTroublesNumber1") && (a !== "controlTroublesNumber2") && (problems.indexOf(a) === -1)){
            problems.push(a);
        }
    return problems;
    }
});
