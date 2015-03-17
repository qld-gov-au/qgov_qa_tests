var titleText, bodyText;


// get value for META element
getMeta = function( name ) {
	'use strict';

	return jQuery( 'meta' ).filter( '[name="' + name + '"]' ).attr( 'content' );
};


// convert W3CDTF string to date
w3cdtf = function( s ) {
	'use strict';

	s = s.split( '-' );
	return new Date( s[ 0 ], s[ 1 ] - 1, s[ 2 ] );
};


getBodyText = function() {
	'use strict';

	if ( ! bodyText ) {
		bodyText = $( document.body ).getFilteredText( '#qunit, .print-link-url' );
	}

	return bodyText;
};


getTitleText = function() {
	'use strict';

	if ( ! titleText ) {
		titleText = $( 'title' ).text();
	}

	return titleText;
};


(function( $ ) {
	'use strict';


	// get text, optionally filtering out elements matching a selector
	$.fn.getFilteredText = function( selector ) {
		var clone = this.clone();

		clone.find( selector ).remove();
		clone.find( 'script, noscript' ).remove();
		clone.find( 'img' ).map(function() {
			return this.alt;
		});
		clone.find( 'input' ).map(function() {
			return this.value;
		});

		return clone.text();
	};


	// before testing…
	QUnit.begin(function() {

		// cache
		getTitleText();
		getBodyText();

		// inject QUnit UI markup 
		$( document.body ).append( '<div id="qunit"></div>' );

	});


	// after testing…
	QUnit.done(function() {
		var hidePassingTests;

		$( 'h1 a', '#qunit' ).text( 'QGov Online tests' );

		hidePassingTests = document.getElementById( 'qunit-filter-pass' );
		if ( hidePassingTests.checked !== true ) {
			hidePassingTests.click();
		}


	});


}( jQuery ));
