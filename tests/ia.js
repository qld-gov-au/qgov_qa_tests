(function( $ ) {
	'use strict';


	module( 'Information architecture' );


	// breadcrumb URLs
	test( 'breadcrumb URLs', function() {
		$( 'a', '#breadcrumbs' ).each(function() {
			strictEqual( this.href.replace( /^.*\/([^\/]+\/?)$/, '$1' ), this.href.replace( /^.*\/([^\/]+)\/?$/, '$1/' ), 'URL should end with /' );
		});
	});

	if ( $( '#nav-section' ).length) {
		test( 'theme', function() {
			// heading in menu should match breadcrumb
			strictEqual( $( '#nav-section h2' ).text(), $( '#breadcrumbs a:last' ).text(), 'section menu heading should match last item in breadcrumb' );
		});

		// section nav URLs
/*	bboyle 2012-07-10: commented out for Education franchise (using filename.html pages from sharepoint)
		test( 'section navigation URLs', function() {
			$( 'a', '#nav-section' ).each(function() {
				strictEqual( this.href.replace( /^.*\/([^\/]+\/?)$/, '$1' ), this.href.replace( /^.*\/([^\/]+)\/?$/, '$1/' ), 'URL should end with /' );
			});
		});
*/
		// TODO check host for URLs (should be part of *.qld.gov.au*)
	}


	$( '#ia > ul > li' ).each(function() {
		var iaBox = $( this ),
			h2Text = $.trim( iaBox.find( 'h2' ).text() ).replace( /\s+\(.*?\)$/, '' ),
			moreLink = $( 'a:contains("More")', iaBox )
		;

		// TEST IA ELEMENT
		test( 'IA heading for: ' + h2Text, function() {
			strictEqual( $( 'h2', iaBox ).length, 1, 'found h2' );
			strictEqual( $( 'h2 a', iaBox ).length, 1, 'has link' );
			strictEqual( $( 'h2 a > img', iaBox ).length, 1, 'has thumbnail image' );
			strictEqual( $( 'h2 a > span.link-text', iaBox ).length, 1, 'link contains span.link-text' );
		});

		test( 'IA content for: ' + h2Text, function() {
			strictEqual( iaBox.find( 'h2, ul, p' ).length, 2, '2 children (heading + content)' );
			strictEqual( $( 'li', iaBox ).length < 6, true, 'maximum of 5 links' );
			strictEqual( $( 'li a', iaBox ).length, $( 'li', iaBox ).length, '1 link per list item' );
		});

		// More links
		if ( moreLink.length > 0 ) {
			test( 'More link for: ' + h2Text, function() {
					strictEqual( moreLink.length, 1, 'Only 1 more link' );
					strictEqual( $( 'li', iaBox ).length, 5, 'There are 5 links' );
					strictEqual( moreLink.text(), $( 'li', iaBox ).eq( -1 ).find( 'a' ).eq( 0 ).text(), 'More link is last' );
					strictEqual( moreLink.attr( 'title' ), 'More about ' + h2Text.toLowerCase(), 'More link has correct @title text' );
			});
		}

	});


	test( 'file naming conventions', function() {
		var href = window.location.href;
		strictEqual( href.replace( /^.*(\/[^\/]*)$/, '$1' ), '/', 'URL should end with /' );
	});


}( jQuery ));
