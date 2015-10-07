Orders = new Mongo.Collection("orders");

var pendingStatus="pending",
    inprogressStatus="inprogress",
    doneStatus="done";

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
  troubles : {
    type: String,
    label: 'Troubles',
    max: 1000
  },
  status : {
    type: String,
    label: 'Status',
    allowedValues: [pendingStatus, inprogressStatus, doneStatus],
  }
});

Orders.attachSchema(OrderSchema);
