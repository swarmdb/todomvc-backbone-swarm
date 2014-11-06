var app = app || {};
(function(){
	'use strict';

	// Swarm Host
	// ----------

	// create the storage
	var storage = new Swarm.SharedWebStorage('storage', { persistent:true });

	// may to create objects
	storage.isRoot = true

	// get session identifer
	var ssnInt = localStorage.getItem('ssn') || (Math.random() * 1000) | 0
	localStorage.setItem('ssn', ++ssnInt);
	var ssn = Swarm.Spec.int2base(ssnInt, 3);

	// generate application identifer, it can be user id
	app.id = 'Bb' + Swarm.Spec.int2base((Math.random() * 10000) | 0)

	// create the host instance for any swarm objects interaction
	app.host = new Swarm.Host(app.id+'~'+ssn, 0, storage);
})();
