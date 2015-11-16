/**
 * Created by vova on 18.10.2015.
 */
Template.edit.events({
    "mousedown .troubles": function(event) {
        "use strict";
        var objectID = Session.get("edit"),
            text = $(event.target).html(),
            collection = (Orders.find(objectID)).fetch(),
            newUnfinished = collection[0].troublesUnfinished,
            newFinished = collection[0].troublesFinished;
        if (event.which === 1) {
            if ($(event.target).hasClass("orderedTroubles")){
                if ($(event.target).css("color") === "rgb(255, 0, 0)") {
                    newUnfinished.splice(newUnfinished.indexOf(text), 1);
                    newFinished.push(text);
                    Orders.update(objectID, {$set: {troublesUnfinished: newUnfinished, troublesFinished: newFinished }});
                } else if ($(event.target).css("color") === "rgb(0, 0, 0)") {
                    newFinished.splice(newFinished.indexOf(text), 1);
                    newUnfinished.push(text);
                    Orders.update(objectID, {$set: {troublesUnfinished: newUnfinished, troublesFinished: newFinished }});
                }
            }
        } else if (event.which === 2) {
            if ($(event.target).hasClass("orderedTroubles")){
                if (newFinished.indexOf(text) !== -1) {
                    newFinished.splice(newFinished.indexOf(text), 1);
                    Orders.update(objectID, {$set: {troublesFinished: newFinished}});
                } else {
                    newUnfinished.splice(newUnfinished.indexOf(text), 1);
                    Orders.update(objectID, {$set: {troublesUnfinished: newUnfinished}});
                }
            }
        }
    },
    "click #else": function(){
        "use strict";
        var objectID = Session.get("edit"),
            collection = (Orders.find(objectID)).fetch(),
            newUnfinished = collection[0].troublesUnfinished,
            problem = $("#elseInput").val().trim();
        if (problem) {
            newUnfinished.push(problem);
            Orders.update(objectID, {$set: {troublesUnfinished: newUnfinished}});
        }
        $("#elseInput").val("");
    },
    "click #delete":function(e){
        "use strict";
        var conf = confirm("Do you really want to remove this inventory?");
        if (conf){
            var objectID = Session.get("edit");
            Orders.remove(objectID);
            Router.go("/dashboard");
            e.preventDefault()
        }
    },
    "click #add": function(e){
        "use strict";
        var objectID = Session.get("edit"),
            collection = (Orders.find(objectID)).fetch(),
            bike = $("#bikeName").val().trim(),
            name = $("#name").val().trim(),
            phone =($("#phone").val().trim()),
            deadline = $("#deadline").val().trim(),
            price = $("#price").val().trim(),
            troublesUnfinished = collection[0].troublesUnfinished,
            troublesFinished = collection[0].troublesFinished,
            status;
        if (troublesFinished.length > 0) {
            status= "inprogress";
        } else {
            status= "pending";
        }
        if (troublesUnfinished.length === 0) {
            status= "done";
        }
        console.log(objectID);

        var newCustomer = {
                bike: bike,
                name: name,
                phone: phone,
                deadline: deadline,
                price: price,
                troublesUnfinished: troublesUnfinished,
                troublesFinished: troublesFinished,
                status: status
            };

        var newId = Orders.insert(newCustomer, function(error){
              if (error){
                  Router.go("/CustomerErrors");

            }
        });
        if (newId){
            Orders.remove(objectID);
            Session.set("edit", "");
            Router.go("/dashboard");
            console.log("2");
            e.preventDefault();
        }
    }
})

