/**
 * Created by vova on 06.10.2015.
 */
Template.CustomerErrors.helpers({
    errors: function(){
        console.log("123123");
        var context = Orders.simpleSchema().namedContext(this.contextName);
        return context.invalidKeys().map(function(data){ return {message: context.keyErrorMessage(data.name)}});
    }
});
