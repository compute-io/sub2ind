'use strict';

// MODULES //

var isMatrixLike = require( 'validate.io-matrix-like' ),
	isNonNegativeInteger = require( 'validate.io-nonnegative-integer' );


// SUB2IND //

/**
* FUNCTION: sub2ind( x, i, j )
*	Converts subscripts to linear indices.
*
* @param {Matrix} x - input data structure
* @param {Number} i - subscript for first dimension
* @param {Number} j - subscript for second dimension
* @returns {Number|Null} linear index or null
*/
function sub2ind() {
	var nargs = arguments.length,
		x = arguments[ 0 ],
		idx,
		i;
	if ( !isMatrixLike( x ) ) {
		throw new TypeError( 'sub2ind()::invalid input argument. Must provide a matrix. Value: `' + x + '`.' );
	}
	for ( i = 1; i < nargs; i++ ) {
		if ( !isNonNegativeInteger( arguments[ i ] ) ) {
			throw new TypeError( 'sub2ind()::invalid input argument. Subscripts must be nonnegative integers. Argument number `' + i + '`. Value: `' + arguments[ i ] + '`.' );
		}
	}
	idx = x.offset;
	for ( i = 1; i < nargs; i++ ) {
		idx += arguments[ i ] * x.strides[ i-1 ];
	}
	return ( idx < x.length ) ? idx : null;
} // end FUNCTION sub2ind()


// EXPORTS //

module.exports = sub2ind;
