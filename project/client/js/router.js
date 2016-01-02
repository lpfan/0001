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
    });
    this.route('dashboard', {
        path: '/dashboard',
        template: 'dashboard'
    });
    this.route('edit', {
        path: '/edit',
        template: 'edit'
    });
    this.route('changePass', {
        path:'/changePass',
        template: 'changePass'
    });
    this.route('archive', {
        path:'/archive',
        template: 'archive'
    });
    this.route('more', {
        path:'/more',
        template: 'more'
    });
});
