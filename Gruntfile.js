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
						'build',
						'lint',
						'jsdoc',
						'plato'
					],
					descriptions: {
						'default': 'Default Task. Just type `grunt` for this one. Firing the dev and watch tasks for now.',
						'watch':
							'`grunt watch` run tasks whenever watched files changes and ' +
							'reloads the browser with »LiveReload« plugin.',
						'dev': '`grunt dev` runs development tasks. Only linting right now.',
						'build': '`grunt build` builds production ready sources to a »dist« directory.',
						'lint': '`grunt lint` lints your JavaScript files.',
						'jsdoc': '`grunt jsdoc` generates source documentation using jsdoc.',
						'plato': '`grunt plato` generates static code analysis charts with plato.'
					},
					groups: {
						'Dev': ['default', 'dev', 'watch', 'lint', 'jsdoc', 'plato'],
						'Production': ['build'],
					},
					sort: [
						'default',
						'lint',
						'dev',
						'watch',
						'jsdoc',
						'plato',
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

		// jsHint
		jshint: {
			options: {
				reporter: require('jshint-stylish'),
				jshintrc: '.jshintrc',
			},
			all: [
				'Gruntfile.js',
				'assets/js/**/*.js'
			]
		},

		eslint: {
			target: [
				'Gruntfile.js',
				'assets/js/**/*.js'
			]
		},

		jsdoc: {
			all: {
				src: [
					'assets/js/**/*.js',
				],
				options: {
					destination: 'docs'
				}
			}
		},

		plato: {
			options: {
				 jshint: grunt.file.readJSON('.jshintrc')
			},
			all: {
				files: {
					'reports/': [
						'assets/js/**/*.js',
						'test/**/*.js'
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
				tasks: ['newer:jshint'],
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
				tasks: ['jshint'],
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

	// Lint files
	grunt.registerTask('lint',
		[
			'jshint',
			'eslint'
		]
	);

	/**
	 * A task for development
	 */
	grunt.registerTask('dev',
		[
			'jshint',
			'jsdoc',
			'plato'
		]
	);

	// Default task
	grunt.registerTask('default',
		[
			'dev',
			'watch'
		]
	);

	/**
	 * A task for your production ready build
	 */
	grunt.registerTask('build',
		[
			'jshint',
			'jsdoc',
			'plato',
			'uglify',
			'processhtml'
		]
	);

};
