/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Matrix data structure:
	matrix = require( 'dstructs-matrix' ),

	// Module to be tested:
	sub2ind = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-sub2ind', function tests() {

	var mat = matrix( [3,2] );

	it( 'should export a function', function test() {
		expect( sub2ind ).to.be.a( 'function' );
	});

	it( 'should throw an error if the first argument is not matrix-like', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				sub2ind( value );
			};
		}
	});

	it( 'should throw an error if provided a subscript argument which is not a nonnegative integer', function test() {
		var values = [
			'5',
			-5,
			Math.PI,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{},
			[]
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				sub2ind( mat, value );
			};
		}
	});

	it( 'should convert subscripts to linear indices', function test() {
		assert.strictEqual( sub2ind( mat, 0, 0 ), 0 );
		assert.strictEqual( sub2ind( mat, 0, 1 ), 1 );
		assert.strictEqual( sub2ind( mat, 1, 0 ), 2 );
		assert.strictEqual( sub2ind( mat, 1, 1 ), 3 );
		assert.strictEqual( sub2ind( mat, 2, 0 ), 4 );
		assert.strictEqual( sub2ind( mat, 2, 1 ), 5 );
	});

	it( 'should return `null` if provided subscripts which exceed data structure dimensions', function test() {
		assert.isNull( sub2ind( mat, 100, 999 ) );
	});

});
