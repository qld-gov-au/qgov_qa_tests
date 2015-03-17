(function( $ ) {
	'use strict';


	module( 'Metadata' );


	test( 'title', function() {
		var title = $.trim( getTitleText() );

		// ' | Queensland Government'.length === 24
		strictEqual( title.substring( title.length - 24 ), ' | Queensland Government', 'must end with | Queensland Government' );
		strictEqual( title.substring( 0, title.length - 24 ), getMeta( 'DCTERMS.title' ), 'title should match DCTERMS.title' );

		strictEqual( title.replace( /\s+\|.*$/, '' ), $( 'h1', '#content' ).eq( 0 ).text(), 'title should match h1');
		strictEqual( $( '#breadcrumbs .last-child' ).text(), $( 'h1', '#content' ).eq( 0 ).text(), 'last item in breadcrumb should match h1' );

		if ( $( '#nav-section' ).length ) {
			strictEqual( $.trim( $('#nav-section .current-page').text() ), $( 'h1', '#content' ).eq( 0 ).getFilteredText(), 'current page in nav should match h1' );
		}

		if ( $( 'meta[name="DCTERMS.alternative"]' ).length > 0 ) {
			ok( getMeta( 'DCTERMS.alternative' ), 'DCTERMS.alternative has empty @content (should remove META tag)' );
		}
	});


	test( 'description', function() {
		strictEqual( getMeta( 'description' ), getMeta( 'DCTERMS.description' ), 'description should match DCTERMS.description' );
	});


	test( 'identifier', function() {
		var path = window.location.pathname.replace( /\/index.html$/, '/' );

		strictEqual( getMeta( 'DCTERMS.identifier' ).replace( /^.*?:\/\/([^\/]+).*$/, '$1' ), 'www.qld.gov.au', 'must begin with http://www.qld.gov.au/ (https also ok)' );
		strictEqual( getMeta( 'DCTERMS.identifier' ).replace( /^https?:\/\/[^\/]+/, '' ), path, 'URL path should match identifier: ' + path );
	});


	test( 'modified', function() {
		var modified = w3cdtf( getMeta( 'DCTERMS.modified' )),
			updated = new Date( $( '#document-properties' ).text().replace( /^.*Last updated\s+(\d+\s+[A-Za-z]+,?\s+\d+).*$/, '$1' ))
		;

		deepEqual( modified.toString(), updated.toString(), 'last updated date should match DCTERMS.modified' );
	});


	test( 'license', function() {
		var licence,
			AusGoalCreativeCommonsLicences = [ 'by', 'by-sa', 'by-nd', 'by-nc', 'by-nc-sa', 'by-nc-nd' ];

		switch ( $( 'meta[name="DCTERMS.license"]' ).length ) {
			case 0:
				// no license
				ok( true, 'DCTERMS.licence is not present' );

			break;

			case 1:
				// 1 license
				licence = getMeta( 'DCTERMS.license' );

				if ( /creativecommons\.org/i.test( licence )) {
					// check creative commons licence format
					// http://creativecommons.org/licenses/by-nd/3.0/au/
					licence = licence.split( /\/+/ );

					strictEqual( /^https?/.test( licence[ 0 ] ), true, 'http/s protocol' );
					strictEqual( licence[ 1 ], 'creativecommons.org', 'creativecommons.org domain' );
					strictEqual( licence[ 2 ], 'licenses', 'creativecommons.org/licenses/' );
					strictEqual( new RegExp( '^(?:' + AusGoalCreativeCommonsLicences.join( '|' ) + ')$' ).test( licence[ 3 ] ), true, 'expected one of: ' + AusGoalCreativeCommonsLicences.join( ', ' ));
					strictEqual( /^\d+\.\d+$/.test( licence[ 4 ] ), true, 'version number included' );
					strictEqual( licence[ 5 ], 'au', 'linked to Australian creative commons licence' );
					strictEqual( licence.slice( 5 ).join( '/' ), 'au/', 'AusGOAL CC licence should end after /au/' );

				} else {
					// is it a URL?
					strictEqual( /^https?/.test( licence ), true, 'custom licence: ' + licence );
				}

			break;

			default:
				strictEqual( $( 'meta[name="DCTERMS.license"]' ).length, 1, 'DCTERMS.license should only be specified once' );
		}

	});


}( jQuery ));
