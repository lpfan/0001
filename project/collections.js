Orders = new Mongo.Collection("orders");

var pendingStatus="pending",
    inprogressStatus="inprogress",
    doneStatus="done";

/*var OrderSchema = new SimpleSchema({
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
        allowedValues: [pendingStatus, inprogressStatus, doneStatus],
    }
});*/
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
    troublesFinished:{
        type: [String]
    },
    troublesUnfinished:{
        type: [String]
    }
});
Orders.attachSchema(OrderSchema);

