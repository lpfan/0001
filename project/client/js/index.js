Template.dashboard.helpers({
  pendingOrders: function(){
      var f = (Orders.find()).fetch(),
          a =[];
      console.log(f);
      f.forEach(function(d){
          "use strict";
          console.log(d);
      });

    return Orders.find();
  }
});
