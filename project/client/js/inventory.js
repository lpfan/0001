/**
 * Created by vova on 29.09.2015.
 */
Session.set("prob", "");
var problems = [];
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
        }else{
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
        problems.push(problem);

    },

    "click #add":function(){
        "use strict";
        var bike = $("#bikeName").val().trim(),
            name = $("#name").val().trim(),
            phone =($("#phone").val().trim()),
            deadline = $("#deadline").val().trim(),
            price = $("#price").val().trim(),
            troubles = {},
            pendingStatus="pending",
            inprogressStatus="inprogress",
            doneStatus="done";
        $(".form").each(function(){
            if ($(this).css("background-color") === "rgb(255, 0, 0)"){
                troubles[$(this).text()] = false;
            }
        });
        problems.forEach(function(trouble){
            troubles[trouble] = false;
        });
        var newCustomer = {
            bike: bike,
            name: name,
            phone: phone,
            deadline: deadline,
            price: price,
            troubles: troubles,
            status: "pending"
        };
        var OrderSchema = new SimpleSchema({
            bike: {
                type: String,
                label: 'Bike',
                max: 500
            },
            phone : {
                type: String,
                label: 'Phone',
                max: 20
            },

            status : {
                type: String,
                label: 'Status',
                allowedValues: [pendingStatus, inprogressStatus, doneStatus]
            },
            price: {
                type: String,
                label: 'Price',
                max: 20
            },
            deadline: {
                type: String,
                label: 'Deadline',
                max: 20
                },
            name: {
                type: String,
                label: 'Name',
                max: 20
            },
            troubles:{
                type: Object
            }
        });
        Orders.insert(newCustomer);
        problems.splice(0,problems.length);
        if (!(Match.test(newCustomer, OrderSchema))){
            Session.set("prob", "");
        Router.go("/CustomerErrors");
        }else{
            location.assign("http://localhost:3000/inventory.html");
            location.reload(true);
        }
    },

    "mousedown p": function(event){
        "use strict";
        var edit = $(event.target).text(), k;
        $(event.target).remove();
        if (event.which === 1){
            var input = $("#elseInput");
            problems.splice(problems.indexOf(edit), 1);
            if (input.val().trim()){
                var problem = input.val().trim();
                problems.push(problem);
                Session.set("prob", problem);
                input.val(edit);
                input.focus();
            }else{
                input.val(edit);
                input.focus();

                if (problems.length % 2 === 1){
                    k = "controlTroublesNumber1";
                }else{
                    k = "controlTroublesNumber2";
                }
                Session.set("prob", k);
            }
        }else{
            problems.splice(problems.indexOf(edit), 1);
            if (problems.length % 2 === 1){
                k = "controlTroublesNumber1";
            }else{
                k = "controlTroublesNumber2";
            }
            Session.set("prob", k);
        }
    }
});

