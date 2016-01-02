/**
 * Created by vova on 01.01.2016.
 */
Template.archive.helpers({
    archiveOrders: function(){
        "use strict";
        return OrdersArchive.find();
    }
})
