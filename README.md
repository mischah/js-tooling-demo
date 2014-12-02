#JS Tooling

Content and demo project of the Tec Talk named »JavaScript Tooling«.

## Build Tools

* <http://gulpjs.com>
* <http://gruntjs.com>

### Grunt

#### Prerequisites

* Download and install Node.js
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

Go to Git Tag `Level 1 - Empty Grunt Setup` to start from the beginning with just 2 little JavaScript files.

---

##Code Linting

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

---


# Unit Testing

## Unit Testing für alle

* <http://qunitjs.com>
* <https://github.com/gruntjs/grunt-contrib-qunit>

## Unit-Tests mit »Nodeunit«

* <https://github.com/caolan/nodeunit>
* <https://github.com/gruntjs/grunt-contrib-nodeunit>

Test respectively Behavior-Driven JavaScript mit Jasmine**

* <https://jasmine.github.io>
* <https://github.com/gruntjs/grunt-contrib-jasmine>

**Spy/Mocking Framework**

* <http://sinonjs.org>


**Coverage**

Auf <http://gruntjs.com/plugins> nach »coverage« suchen.

---

# Changelog

Changelog aus Git commit messages generieren.

* <https://github.com/vojtajina/grunt-bump>
* <https://github.com/ericmatthys/grunt-changelog>

---

# Ressourcen

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
