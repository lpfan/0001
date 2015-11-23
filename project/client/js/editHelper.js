/**
 * Created by vova on 18.10.2015.
 */
Template.edit.helpers({
    editCollection: function(){
        var id = Session.get("edit"),
            a = (Orders.find(id));
        return a;
    }
});
