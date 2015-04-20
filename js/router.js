/**
 * Router scripts
 *
 * @desc Scripts to run the frotend
 * @author [@Freizeitler]
 * @dependency ember.js
 */

Ember.Router.extend({
  rootURL: '/'
});

App.Router.map(function () {
  this.route('restaurant');
  this.route('dashboard');
  this.route('personal');
  this.route('grossmarkt');
  this.route('marketing');
  this.route('goodbye');
});

// TODO: remove this, it was only for testing
App.DashboardRoute = Ember.Route.extend({
  model: function () {
    return ['todo', 'test', 'lall'];
  }
});