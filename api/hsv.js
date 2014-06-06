

// require all conversion functions
var cvert = require( "colorvert" );


// cmyk endpoint handler
module.exports = function( req, res ){
		
	// parse the URL for a format request
	var url_parts = req.url.substring( 1 ).split( "/" );
		format = url_parts[0],
		h = parseFloat( url_parts[1] ),
		s = parseFloat( url_parts[2] ),
		v = parseFloat( url_parts[3] );
	

	if ( h && s && v ) {

		// convert to Lab using transicc
		cvert.hsv_to_all( h, s, v, function( response ){

			// log the conversion
			console.log( "Converted hsv( "+h+", "+s+", "+v+" )." );

			// send the response to the browser
			res.send( response );

		});

	} else {

		// send the response to the browser
		res.send( "Invalid input" );

	}

};

