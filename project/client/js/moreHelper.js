/**
 * Created by vova on 02.01.2016.
 */
Template.more.helpers({
    moreCollection: function(){
        var id = Session.get("more"),
            a = (OrdersArchive.find(id));
        return a;
    }
});
