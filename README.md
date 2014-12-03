#JS Tooling

Content and demo project of the Tec Talk named »JavaScript Tooling«.

Sourcecode available [over here](https://git2.micromata.de/projects/FREESTYLE/repos/javascript-tooling/browse).

## Build Tools

* [Grunt](http://gulpjs.com) (Task runner)
	* Based on files
	* Configuration over code
	* Great API for writing own Tasks
	* probably a lower learning curve
* [Gulp](http://gruntjs.com) (Streaming build system)
	* Based on streams
	* Code over configuration
	* Easy API setup your tasks 
	* Blazingly fast

Further information about the differences are explained within this supreme [slide deck](https://speakerdeck.com/addyosmani/front-end-tooling-workflows).


### Grunt

<http://gruntjs.com>

Source → Magic happens → Destination 

#### Prerequisites

* Download and install Node.js which comes with [npm](https://www.npmjs.org)
* Install the Grunt CLI globally with

       npm install -g grunt-cli

See <http://gruntjs.com/getting-started>

#### Our Project

Our example project can now be installed with:

    cd ~/my/path/
    git clone ssh://git@git2.micromata.de:7999/tec/js-tooling.git
    npm install

Enter:

	grunt tasks

to see the available tasks.

##### Where the magic happens

The tasks are configured within `Gruntfile.js`

The dependencies for the tasks are defined within `package.json`

##### Start from the beginning

Go to Git Tag `level-1` (»Level 1 - Empty Grunt Setup«) to start from the beginning with

* a stupid HTML file
* just 2 little JavaScript files
* a pretty empty Grunt file

---

## Minify and concatenate

Performance matters. Therefore you need to minify and concatenate your JavaScript files which can be automated with Grunt

Check Git Tag `level-2` (»Level 2 - Minify and concatenate«) to see how to handle these kind of tasks.

* <https://github.com/mishoo/UglifyJS2>
* <https://github.com/gruntjs/grunt-contrib-uglify>
* <https://github.com/gruntjs/grunt-contrib-concat>

## Linting

JavaScript Linting = Quality Assurance.

Needed to:

* Prevent syntax error
	* eg. missing semicolons 
* Prevent logical errors / structural problems
	* eg. unreachable code
* Force adherence to coding conventions
	* eg. UpperCamelCase for constructors

There are two main »competitors« when it comes to Linting:

* [JSHint](http://jshint.com)
	* Larger eco-system (editor plugins)
	* Defaults are easier to handle
	* Less config needed (caused by less rules)
* [ESLint](http://eslint.org)
	* More rules (especially stylistic issues) eg. »trailing whitespace«
	* More flexibility (configurable → warnings vs. errors)
	* Faster development 

Both configurable via dot files within the project (team or company standards).

See this slide deck of mine for details <http://de.slideshare.net/mischah/js-linting-en>

### Helpful

* [Linting errors described](http://jslinterrors.com)
* [Default ESLint config](https://github.com/eslint/eslint/blob/master/conf/eslint.json)
* [ESLint Rules](http://eslint.org/docs/rules/)
* [Configuring ESLint](https://github.com/eslint/eslint/tree/master/docs/configuring)
* [JSHint docs](http://jshint.com/docs/)
* [JSHint Options](http://jshint.com/docs/options/)

Check Git Tag `level-3` (»Level 3 - Linting«) to see how to handle these kind of tasks.

---

## Documentation

Documentation via DocBlock comments as known from Javadoc.

The most used tools:

* [JSDoc](http://usejsdoc.org)
	* [Grunt task](https://github.com/krampstudio/grunt-jsdoc)
* [YUIDoc](https://yui.github.io/yuidoc/)
	* [Grunt task](https://github.com/krampstudio/grunt-jsdoc)

We are going to use JSDoc over here.

Check Git Tag `level-4` (»Level 4 - Documentation«) to see how to handle generating the docs.

---

## Code complexity measuring

Analyze and benchmark code complexity with »plato«.

Example reports on popular projects:


* [jquery](http://es-analysis.github.com/plato/examples/jquery/)
* [grunt](http://es-analysis.github.com/plato/examples/grunt/)
* [marionettejs](http://es-analysis.github.com/plato/examples/marionette/)

See [plato](https://github.com/es-analysis/plato) and the corresponding [Grunt task](https://github.com/jsoverson/grunt-plato)


plato is based on <https://github.com/philbooth/complexity-report>. This is place to read about how to interpret the [metrics](https://github.com/philbooth/escomplex/blob/master/README.md#metrics).

Check Git Tag `level-5` (»Level 5 - Code complexity«) to see how easy it is to configure plato.

**Hint:** Add your `reports` directory to version control to observe the changes in complexity during development within the team.

---

## Dev Server

* <https://github.com/gruntjs/grunt-contrib-connect>

---


## Dependency Management

### External Libs

<http://bower.io>

## Eigener Code

<http://browserify.org> VS <http://www.requirejs.org>

<http://browserifysearch.org>
<https://github.com/jrburke/r.js>

---

## Unit Testing

### Unit Testing für alle

* <http://qunitjs.com>
* <https://github.com/gruntjs/grunt-contrib-qunit>

### Unit-Tests mit »Nodeunit«

* <https://github.com/caolan/nodeunit>
* <https://github.com/gruntjs/grunt-contrib-nodeunit>

### Test respectively Behavior-Driven JavaScript mit Jasmine

* <https://jasmine.github.io>
* <https://github.com/gruntjs/grunt-contrib-jasmine>

### Spy/Mocking Frameworks

* <http://sinonjs.org>


### Coverage

Auf <http://gruntjs.com/plugins> nach »coverage« suchen.

### Test runner

Framework agnostic unit testing on real devices offering simple integration with Jenkins, Travis etc.

<http://karma-runner.github.io>

* <https://github.com/karma-runner/karma>
* <https://github.com/karma-runner/grunt-karma>
* <https://github.com/karma-runner/karma-coverage>
* <https://github.com/karma-runner/karma-chrome-launcher>
* <https://github.com/karma-runner/karma-firefox-launcher>
* <https://github.com/karma-runner/karma-safari-launcher>
* <https://github.com/karma-runner/karma-phantomjs-launcher>
* <https://github.com/karma-runner/karma-qunit>
* <https://github.com/karma-runner/karma-nodeunit>
* <https://github.com/karma-runner/karma-jasmine>


---

## Project Scaffolding

* <http://yeoman.io>

--* -

# Release Erstellung

* Changelog aus Git commit messages generieren.
	* <https://github.com/ericmatthys/grunt-changelog>
* Bump version according to [semver](http://semver-ftw.org/)   
	* <https://github.com/vojtajina/grunt-bump>


---

# Ressourcen

**Grunt performance measuring and boosting**

* [time-grunt](https://github.com/sindresorhus/time-grunt)
	* Display the elapsed execution time of grunt tasks
	* Used within this repo.
* [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks)
	* Load multiple grunt tasks using globbing patterns
	* Increases performance and save lines of code within your Gruntfile
	* Used within this repo.
* [grunt-newer](https://github.com/tschaub/grunt-newer)
	* Configure Grunt tasks to run with newer files only.
	* Used for the watch tasks in this repo.
* [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent)
	* Run grunt tasks simultaneously


**LiveReload via Browser Extension**

[LiveReload knowledgebase](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)

**Linkliste mit den besten Quellen**

* <http://jstherightway.org>

**Guter Styleguide**

* <https://github.com/rwaldron/idiomatic.js>

**Online Bücher**

* <http://eloquentjavascript.net>
* <http://addyosmani.com/resources/essentialjsdesignpatterns/book>
* <https://github.com/getify/You-Dont-Know-JS>

**Slidedecks**

* <https://speakerdeck.com/addyosmani/front-end-tooling-workflows>
