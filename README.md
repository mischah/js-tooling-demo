#JS Tooling

Content and demo project of the Tec Talk named »JavaScript Tooling«.

## Build Tools

* <http://gulpjs.com>
* <http://gruntjs.com>

Further information about the differences are explained within this supreme [slide deck](https://speakerdeck.com/addyosmani/front-end-tooling-workflows).


### Grunt

<http://gruntjs.com>

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

* <https://github.com/mishoo/UglifyJS2>
* <https://github.com/gruntjs/grunt-contrib-uglify>
* <https://github.com/gruntjs/grunt-contrib-concat>

## Code Linting

See Git Tag `Level 2 - Hint `


* <http://jslinterrors.com>
* <http://jshint.com>
* <http://eslint.org>

---

## Documentation

* <http://usejsdoc.org>

---

## Code complexity measuring

### Plato

* <https://github.com/es-analysis/plato>
* <https://github.com/jsoverson/grunt-plato>

Basiert auf <https://github.com/philbooth/complexity-report>

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

## Project Scaffolding

* <http://yeoman.io>

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

# Release Erstellung

* Changelog aus Git commit messages generieren.
	* <https://github.com/ericmatthys/grunt-changelog>
* Bump version according to [semver](http://semver-ftw.org/)   
	* <https://github.com/vojtajina/grunt-bump>


---

# Ressourcen

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
