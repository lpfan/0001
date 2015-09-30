/**
 * Created by vova on 29.09.2015.
 */
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
            $(event.target).css("background-color", "red");
        }
    },

    "click #else": function(){
        "use strict";
        var problem = $("#elseInput").val().trim();
        if (problem) {


            problems.push(problem);
            Session.set("prob", problems);


        }

            console.log(problem);

    },

    "click #add":function(){
        "use strict";
        var bike = $("#bikeName").val().trim();
        var name = $("#name").val().trim();
        var phone =$("#phone").val().trim();
        var deadline = $("#deadline").val().trim();
        var price = $("#price").val().trim();
        var newObject = bike+name+deadline;
        /*

        name: name,
            phone: phone,
            deadline: deadline,
            price: price
        customer.insert({

        });
        */
        var troubles ={};



    }
});
//var problems = ["segsdg","egfsgfsadf"];
//problems.push.Session.get("prob");
Template.inventory.helpers({
    problem: function(){


    return problems;}


});
