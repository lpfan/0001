Template.dashboard.helpers({
    pendingOrders: function(){
        "use strict";
    return Orders.find({status: "pending"});
    },
    inprogressOrders: function(){
        "use strict";
        return Orders.find({status: "inprogress"});
    },
    doneOrders: function(){
        "use strict";
        return Orders.find({status: "done"});
    }
});
