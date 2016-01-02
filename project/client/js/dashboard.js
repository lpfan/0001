/**
 * Created by vova on 15.10.2015.
 */
Template.order.events({
    "mousedown .troubles": function(event){
        "use strict";

        var objectID = this._id,
            text = $(event.target).html(),
            collection = (Orders.find(objectID)).fetch(),
            newUnfinished = collection[0].troublesUnfinished,
            newFinished = collection[0].troublesFinished;
        if (event.which === 1) {
            if ($(event.target).hasClass("orderedTroubles")) {
                if ($(event.target).css("color") === "rgb(255, 0, 0)") {
                    newUnfinished.splice(newUnfinished.indexOf(text), 1);
                    newFinished.push(text);
                    Orders.update(objectID, {$set: {troublesUnfinished: newUnfinished, troublesFinished: newFinished }});
                } else if ($(event.target).css("color") === "rgb(0, 0, 0)") {
                    newFinished.splice(newFinished.indexOf(text), 1);
                    newUnfinished.push(text);
                    Orders.update(objectID, {$set: {troublesUnfinished: newUnfinished, troublesFinished: newFinished }});
                }
            }/* <button class="destroy {{this}} btn btn-primary btn-xs btn-danger" style="color: black">X</button>
            else if ($(event.target).hasClass("destroy")){
                var text1 = $(event.target).prop("class").slice(8);
                if (newFinished.indexOf(text1) !== -1) {
                    newFinished.splice(newFinished.indexOf(text1), 1);
                    Orders.update(objectID, {$set: {troublesFinished: newFinished}});
                } else {
                    newUnfinished.splice(newUnfinished.indexOf(text1), 1);
                    Orders.update(objectID, {$set: {troublesUnfinished: newUnfinished}});
                }
            }*/
        }else if (event.which === 2){
            if ($(event.target).hasClass("orderedTroubles")) {
                if (newFinished.indexOf(text) !== -1) {
                    newFinished.splice(newFinished.indexOf(text), 1);
                    Orders.update(objectID, {$set: {troublesFinished: newFinished}});
                } else {
                    newUnfinished.splice(newUnfinished.indexOf(text), 1);
                    Orders.update(objectID, {$set: {troublesUnfinished: newUnfinished}});
                }
            }
        }
        if (newFinished.length > 0) {
            Orders.update(objectID, {$set: {status: "inprogress"}});
        } else {
            Orders.update(objectID, {$set: {status: "pending"}});
        }
        if (newUnfinished.length === 0) {
            Orders.update(objectID, {$set: {status: "done"}});
        }
    },
    "click .edit":function(event){
        "use strict";
        if (event.which === 1){
            var objectID = this._id;
            Session.set("edit", objectID);
            Router.go("/edit");
            event.preventDefault();
        }
    },
    "click #archive": function(){
        "use strict";
        if (confirm("add this order to archive?")) {
            var objectID = this._id,
                comment = prompt("You want to add this order to archive. Please, add some comments:"),
                collection = (Orders.find(objectID)).fetch()[0],
                today = new Date(),
                dd = today.getDate(),
                mm = today.getMonth()+ 1,
                yyyy = today.getFullYear();

            if(dd<10) {
                dd='0'+dd
            }

            if(mm<10) {
                mm='0'+mm
            }

            var date = dd+'/'+mm+'/'+yyyy;
            collection.comment = comment;
            collection.date = date;
            OrdersArchive.insert(collection, function(error){
                if(!error){
                    Orders.remove(objectID);
                }
            });

        }

    }
})
