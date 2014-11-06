/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Model
	// ----------
	
	// Define the swarm model
	Swarm.Model.extend('Todo', {});

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false
		},

		initialize: function(){
			// The swarm logic - map the model with type `Todo`
			// Identifier will be applied implicitly from `id` property.
			Swarm.BackboneModelMixin.call(this, '/Todo');
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.set({
				completed: !this.get('completed')
			});
		}
	});
})();
