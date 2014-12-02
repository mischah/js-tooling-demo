/**
 * @file An example module needed by our app.
 * @author Michael Kühnel <m.kuehnel@micromata.de>
 */

/**
 * Make sure our global object is available.
 * @namespace demoApp
 * @todo Rename the global variable throughout the whole file according to your needs.
 * @example
 * yourAppName = window.yourAppName || {};
 * @todo Update documentation after renaming.
 * @ignore
 */
var demoApp = window.demoApp || {};

/**
 * Namespace of the module.
 * Aliasing the jQuery Namespace via Self Invoking Anonymous Function.
 * @namespace modulName
 * @memberof demoApp
 * @param 	{jQuery} $	passing the jQuery object to make $ available even when
 *                    	using jQuery.noConflict()
 */
demoApp.modulName = (function() {
	'use strict';

	/**
	 * Just an example public method that you could call from the global scope.
	 * @memberof demoApp.modulName
	 * @public
	 * @param {string} message Message to write into the console.
	 * @example
	 * demoApp.modulName.yourPublicMethod('Hi Public.');
	 */
	var yourPublicMethod = function(message) {
		console.group('yourPublicMethod');
			console.info(message);
		console.groupEnd();
	};

	/**
	 * Just an example private method that you only can call from within this
	 * module.
	 * @memberof demoApp.modulName
	 * @private
	 * @param {string} message Message to write into the console.
	 */
	var _yourPrivateMethod = function(message) {
		console.group('_yourPrivateMethod');
			console.info(message);
		console.groupEnd();
	};

	/**
	 * Executed on DOM ready within the scope of this module.
	 * @event
	 */
	document.addEventListener('DOMContentLoaded', function() {
		_yourPrivateMethod('Hi Private.');
	});

	// Return functions to make them accessible from outside.
	return {
		yourPublicMethod: yourPublicMethod
	};

}());

/**
 * Executed on DOM ready within the global scope.
 * @event
 */
document.addEventListener('DOMContentLoaded', function() {
	'use strict';

	demoApp.modulName.yourPublicMethod('Hi Public.');
});


