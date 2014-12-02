// JSHint settings
/* jshint camelcase: false, es3: false */

'use strict';

module.exports = function(grunt) {

	// Get devDependencies
	require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

	// Displays the execution time of grunt tasks
	require('time-grunt')(grunt);

	// Config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// List available tasks
		availabletasks: {
			tasks: {
				options: {
					filter: 'include',
					tasks: [
						'default',
						'watch',
						'dev',
						'build'
					],
					descriptions: {
						'default': 'Default Task. Just type `grunt` for this one. Will be defined later.',
						'watch':
							'`grunt watch` run dev tasks whenever watched files change and ' +
							'Reloads the browser with »LiveReload« plugin.',
						'dev': '`grunt dev` will run development tasks. Will be defined later',
						'build': '`grunt build` will later build production ready sources to a »dist« directory.',
					},
					groups: {
						'Dev': ['default', 'dev', 'watch'],
						'Production': ['build'],
					},
					sort: [
						'default',
						'dev',
						'watch',
						'build'
					]
				}
			}
		},

		// watch
		watch: {
			options: {
				livereload: true
			},
			scripts: {
				files: ['assets/js/**/*.js'],
				tasks: [],
				options: {
					spawn: false
				}
			},
			html: {
				files: ['*.html'],
				tasks: [],
				options: {
					spawn: false,
				}
			},
			gruntfile: {
				files: ['Gruntfile.js'],
				tasks: [],
				options: {
					spawn: false
				}
			},

		}

	});

	/**
	 * List available Tasks
	 */
	grunt.registerTask('tasks',
		'`grunt tasks` shows all tasks which are registered for use.',
		['availabletasks']
	);

	/**
	 * A task for development
	 */
	grunt.registerTask('dev',
		[]
	);

	// Default task
	grunt.registerTask(
		'default',
		[]
	);

	/**
	 * A task for your production ready build
	 */
	grunt.registerTask('build',
		[]
	);

};
