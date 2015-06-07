sub2ind
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Converts subscripts to linear indices.


## Installation

``` bash
$ npm install compute-sub2ind
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var sub2ind = require( 'compute-sub2ind' );
```

#### sub2ind( x, i, j )

Converts subscripts to linear indices.

``` javascript
var matrix = require( 'dstructs-matrix' );

var mat = matrix( [3,2] );
/*
	Matrix     Subscripts     Indices

	[ 0 0      [ a00 a01      [ 0 1
A =   0 0   =>   a10 a11   =>   2 3
	  0 0 ]      a20 a21 ]      4 5 ]
*/

var idx = sub2ind( mat, 0, 0 );
// returns 0

idx = sub2ind( mat, 0, 1 );
// returns 1

idx = sub2ind( mat, 1, 0 );
// returns 2

idx = sub2ind( mat, 1, 1 );
// returns 3

idx = sub2ind( mat, 2, 0 );
// returns 4

idx = sub2ind( mat, 2, 1 );
// returns 5
```

If provided subscripts which exceed the dimensions of the input data structure, the function returns `null`.


## Examples

``` javascript
var matrix = require( 'dstructs-matrix' ),
	sub2ind = require( 'compute-sub2ind' );

var data,
	mat,
	idx,
	k, i, j;

data = new Int8Array( 10000 );
mat = matrix( data, [100,100], 'int8' );

idx = new Array( 100 );
for ( k = 0; k < idx.length; k++ ) {
	i = Math.round( Math.random()*100 );
	j = Math.round( Math.random()*100 );
	idx[ k ] = sub2ind( mat, i, j );
}

console.log( idx.join( '\n' ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/compute-sub2ind.svg
[npm-url]: https://npmjs.org/package/compute-sub2ind

[travis-image]: http://img.shields.io/travis/compute-io/sub2ind/master.svg
[travis-url]: https://travis-ci.org/compute-io/sub2ind

[coveralls-image]: https://img.shields.io/coveralls/compute-io/sub2ind/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/sub2ind?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/sub2ind.svg
[dependencies-url]: https://david-dm.org/compute-io/sub2ind

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/sub2ind.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/sub2ind

[github-issues-image]: http://img.shields.io/github/issues/compute-io/sub2ind.svg
[github-issues-url]: https://github.com/compute-io/sub2ind/issues
