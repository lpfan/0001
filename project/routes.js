Router.configure({
  layoutTemplate: 'layout',
});

Router.map(function() {
  this.route('dashboard', {
    path: '/dashboard',
    template: 'dashboard'
  });
});
