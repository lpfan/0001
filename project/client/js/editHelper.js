/**
 * Created by vova on 18.10.2015.
 */
Template.edit.helpers({
    editCollection: function(){
        console.log("helper");
        var id = Session.get("edit"),
            a = (Orders.find(id));
        console.log(id);
        return a;
    }
});
