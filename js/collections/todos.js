/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Collection
	// ---------------

	// The collection of todos is backed by *localStorage* instead of a remote
	// server.
	var Todos = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.Todo,

		// Collection identifier, needs for swarm
		id: 'todosCollection',

		// Attach Swarm logic
		initialize: function(){
			// The swarm logic - map the collection with type `Todos`.
			// Identifier will be applied implicitly from `id` property.
			// Or you may specify it explicitly:
			//    Swarm.BackboneCollectionMixin.call(this, '/Todos#todosCollection')
			Swarm.BackboneCollectionMixin.call(this, '/Todos')
		},

		// Filter down the list of all todo items that are finished.
		completed: function () {
			return this.where({completed: true});
		},

		// Filter down the list to only todo items that are still not finished.
		remaining: function () {
			return this.where({completed: false});
		},

		// We keep the Todos in sequential order, despite being saved by unordered
		// GUID in the database. This generates the next order number for new items.
		nextOrder: function () {
			return this.length ? this.last().get('order') + 1 : 1;
		},

		// Todos are sorted by their original insertion order.
		comparator: 'order'
	});

	// Create our global collection of **Todos**.
	app.todos = new Todos();
})();
