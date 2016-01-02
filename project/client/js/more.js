/**
 * Created by vova on 02.01.2016.
 */
/**
 * Created by vova on 18.10.2015.
 */
Template.more.events({

    "click #addToArchive": function(){
        "use strict";
        var objectID = Session.get("more"),
            comment = $("#comments").val().trim();
        OrdersArchive.update(objectID, {$set: {comment: comment}});
        Router.go("/archive");

    },
    "click #delete":function(e){
        "use strict";
        var conf = confirm("Do you really want to remove this order?");
        if (conf){
            var objectID = Session.get("more");
            OrdersArchive.remove(objectID);
            Router.go("/archive");
            e.preventDefault()
        }
    },
    "click #extract": function () {
        var objectID = Session.get("more"),
            collection = (OrdersArchive.find(objectID)).fetch()[0];
        delete collection.comment;
        delete collection.date;
        Orders.insert(collection, function (error) {
                if (!error) {
                    OrdersArchive.remove(objectID);
                    Router.go("/dashbord");}
            });
    }

});

