/**
 * @file  Base JavaScript needed independent of the project
 * @author Michael Kühnel <m.kuehnel@micromata.de>
 */

// JSHint settings
/* jshint unused: false */

// ESLint settings
/* eslint no-unused-vars:0 */

/**
 * The jQuery object or a jQuery set containing on or more DOM elements.
 * @typedef {Object} jQuery
 */

/**
 * Namespace of the app.
 * This should be only variable the app should store in the global scope.
 * @namespace demoApp
 * @todo Rename the global variable throughout the whole file according to your needs.
 * @example
 * yourAppName = window.yourAppName || {};
 * @todo Update documentation after renaming.
 */
var demoApp = window.demoApp || {};

/**
 * Namespace of the base module. Contains JavaScript needed independent of the
 * project or other modules.
 * @namespace base
 * @memberof demoApp
 */
demoApp.base = (function() {
	'use strict';

	/**
	 * Fix viewport issues with IE 10.
	 * @see {@link http://getbootstrap.com/getting-started/#support-ie10-width}
	 * @memberof demoApp.base
	 * @private
	 */
	var _fixViewportIssues = (function() {
		if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
			var msViewportStyle = document.createElement('style');
			msViewportStyle.appendChild(
				document.createTextNode(
					'@-ms-viewport{width:auto!important}'
				)
			);
			document.querySelector('head').appendChild(msViewportStyle);
		}
	}());

	/**
	 * Avoid `console` errors in browsers that lack a console.
	 * @see {@link https://github.com/h5bp/html5-boilerplate/blob/master/js/plugins.js}
	 * @memberof demoApp.base
	 * @private
	 */
	var _addConsoleMethods = (function() {
		var method;
		var noop = function() {};
		var methods = [
			'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
			'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
			'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
			'timeStamp', 'trace', 'warn'
		];
		var length = methods.length;
		var console = (window.console = window.console || {});

		while (length--) {
			method = methods[length];

			// Only stub undefined methods.
			if (!console[method]) {
				console[method] = noop;
			}
		}
	}());

}());
