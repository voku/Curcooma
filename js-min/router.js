/*
 * Curcooma by Henry Zeitler (https://github.com/Freizeitler))
 */

Ember.Router.extend({rootURL:"/"}),App.Router.map(function(){this.route("dashboard"),this.route("personal"),this.route("grossmarkt"),this.route("marketing"),this.route("goodbye")}),App.DashboardRoute=Ember.Route.extend({model:function(){return["todo","test","lall"]}});
//# sourceMappingURL=router.js.map