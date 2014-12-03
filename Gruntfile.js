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
		distDirectory: 'dist',

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
						'default': 'Default Task. Just type `grunt` for this one. Firing the build and watch tasks for now.',
						'watch':
							'`grunt watch` run tasks whenever watched files change and ' +
							'Reloads the browser with »LiveReload« plugin.',
						'dev': '`grunt dev` will run development tasks. Will be defined later',
						'build': '`grunt build` builds production ready sources to a »dist« directory.',
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

		// uglify
		uglify: {
			options: {
				sourceMap: true,
				compress: {
					drop_console: true,
					drop_debugger: true
				},
				banner: '/* <%= pkg.title %> - v<%= pkg.version %>\n' +
						' * m.kuehnel@micromata.de\n' +
						' * Copyright ©<%= grunt.template.today("yyyy") %> Micromata GmbH\n' +
						' * <%= grunt.template.today("yyyy-mm-dd") %>\n' +
						' */'
			},
			minify : {
				files: [{
					expand: true,
					cwd: 'assets/js',
					src: ['**/*.js', '!**/*min.js'],
					dest: '<%= distDirectory %>/assets/js',
					ext: '.min.js',
					extDot: 'last'
				}]
			},
			concatenate : {
				files: {
					'<%= distDirectory %>/assets/js/built.min.js': ['assets/js/**/*.js']
				}
			}
		},

		processhtml: {
			dist: {
				files: [
					{
						expand: true,
						src: [
							'*.html'
						],
						dest: '<%= distDirectory %>/'
					},
				]
			}
		},

		// watch
		watch: {
			options: {
				livereload: true
			},
			scripts: {
				files: ['assets/js/**/*.js'],
				tasks: ['newer:uglify'],
				options: {
					spawn: false
				}
			},
			html: {
				files: ['*.html'],
				tasks: ['newer:processhtml'],
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
	grunt.registerTask('default',
		[
			'build',
			'watch'
		]
	);

	/**
	 * A task for your production ready build
	 */
	grunt.registerTask('build',
		[
			'uglify',
			'processhtml'
		]
	);

};
