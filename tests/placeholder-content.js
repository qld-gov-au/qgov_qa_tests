(function( $ ) {
	'use strict';


	module( 'Placeholder content checks' );


	test( 'check for latin', function() {
		var loremipsum = /\b(accumsan|adipiscing|Aenean|aliquam|aliquet|amet|arcu|auctor|augue|bibendum|blandit|commodo|condimentum|congue|consectetur|consequat|convallis|Cras|Curabitur|cursus|diam|dictum|dictumst|dignissim|dolor|Donec|dui|egestas|eget|eleifend|elit|enim|erat|Etiam|facilisis|fames|faucibus|felis|fermentum|feugiat|fringilla|Fusce|gravida|habitant|habitasse|hendrerit|imperdiet|interdum|ipsum|justo|lacinia|lacus|laoreet|lectus|libero|ligula|lobortis|lorem|luctus|Maecenas|magna|malesuada|massa|mattis|mauris|metus|molestie|mollis|morbi|neque|netus|nibh|nisl|Nullam|nunc|odio|orci|ornare|Pellentesque|pharetra|Phasellus|placerat|platea|porttitor|posuere|potenti|Praesent|pretium|Proin|pulvinar|purus|quam|quis|Quisque|rhoncus|risus|rutrum|sagittis|scelerisque|semper|senectus|sodales|sollicitudin|suscipit|Suspendisse|tempor|tempus|tincidunt|tortor|tristique|turpis|ullamcorper|ultrices|urna|varius|vehicula|velit|venenatis|Vestibulum|Vivamus|viverra|volutpat|vulputate)\b/i;
		
		strictEqual( loremipsum.test( $( document.body ).text() ), false, 'body content should not contain lorem ipsum' );

		$('meta[content]').each(function() {
			strictEqual( loremipsum.test( this.getAttribute( 'content' )), false, 'meta content contains lorem ipsum' );
		});

		$('img[alt]').each(function() {
			strictEqual( loremipsum.test( this.alt ), false, 'img alt contains lorem ipsum' );
		});
	});


	test( 'metadata', function() {
		if ( $( 'meta[name="keywords"]' ).length ) {
			strictEqual( /KEYWORDS/i.test( getMeta( 'keywords' )), false, 'keywords should not contain "KEYWORDS"' );
		}

		strictEqual( /DESCRIPTION/i.test( getMeta( 'description' )), false, 'description should not contain "DESCRIPTION"' );
		strictEqual( /SUBJECT/i.test( getMeta( 'DCTERMS.subject' )), false, 'subject should not contain "SUBJECT"' );
		strictEqual( /DEPARTMENT NAME/i.test( getMeta( 'DCTERMS.creator' )), false, 'creator should not contain "DEPARTMENT NAME"' );
		strictEqual( /UNIT NAME/i.test( getMeta( 'DCTERMS.creator' )), false, 'creator should not contain "UNIT NAME"' );

		// dreamweaver template defaults
		notStrictEqual( getMeta( 'DCTERMS.type' ), 'Text, Event, InteractiveResource or Service', 'Pick one value for DCTERMS.type (do not use them all)' );
		
	});



	test( 'check for links to 404.html', function() {
		strictEqual( $( 'a[href $= "404.html"]').length, 0, 'links to 404.html' );
	});


}( jQuery ));
