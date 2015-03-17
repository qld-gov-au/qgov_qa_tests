(function( $ ) {
	'use strict';


	module( 'Forms' );


	test( 'fieldset > legend', function() {
		$( 'fieldset' ).each(function() {
			strictEqual( $( this ).children()[ 0 ].tagName.toLowerCase(), 'legend', 'fieldset must have a legend' );
		});
	});


	test( 'missing @for/@id link', function() {
		$( 'input, select, textarea' ).filter( ':not(:hidden,:image,:submit)' ).each(function() {
			ok( this.id, 'every form control should have an @id (' + this.name + ')' );
			strictEqual( $( 'label[for="' + this.id + '"]' ).length, 1, 'should be one label per form control (' + this.id + ')' );
			if ( ! this.id || $( 'label[for="' + this.id + '"]' ).length !== 1 ) {
				$( this ).addClass( 'highlight' );
			}
		});
	});

	test( 'orphaned labels', function() {
		$( 'label' ).each(function() {
			var referenced = document.getElementById( this.htmlFor );
			ok( this.htmlFor, 'every label should have an @for' );
			if ( referenced ) {
				strictEqual( $( referenced ).is( 'input,select,textarea' ), true, 'label should reference a form control <' + referenced.tagName + '>' );
				if ( ! $( referenced ).is( 'input,select,textarea' )) {
					$( this ).addClass( 'highlight' );
				}
			} else {
				ok( false, 'label @for "' + this.htmlFor + '" doesn\'t match any @id' );
				$( this ).addClass( 'highlight' );
			}
		});
	});


	test( 'repeated radio button groups', function() {
		var radioButtons = $( 'input' ).filter( ':radio' ),
			names = [],
			fieldset
		;

		radioButtons.each(function() {
			if ( ! names[ this.name ]) {
				names[ this.name ] = true;

				fieldset = $( this ).closest( 'fieldset' );
				$( this.form.elements[ this.name ] ).each(function() {
					// check is inside same fieldset
					strictEqual( $( this ).closest( 'fieldset' )[ 0 ], fieldset[ 0 ], 'duplicate @name attribute on radio button' );
					if ( $( this ).closest( 'fieldset' )[ 0 ] !== fieldset[ 0 ] ) {
						$( this ).addClass( 'highlight' );
					}
				});
			}
		});

		if ( radioButtons.length === 0 ) {
			ok( true, 'no radio buttons on page' );
		}
	});


}( jQuery ));
