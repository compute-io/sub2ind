'use strict';

var matrix = require( 'dstructs-matrix' ),
	sub2ind = require( './../lib' );

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
