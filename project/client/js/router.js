/**
 * Created by vova on 10.10.2015.
 */
Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('inventory', {
        path: '/inventory',
        template: 'inventory'
    });
    this.route('CustomerErrors', {
        path: '/CustomerErrors',
        template: 'CustomerErrors'
    })
});
