$( function () {
	"use strict";
	$( ".picture-list li" )
		.on( "click", function () {
			$( this )
				.addClass( "selected" )
				.siblings()
				.removeClass( "selected" );
			var src = $( this )
				.find( "img" )
				.attr( "src" );
			$( this )
				.parents( ".picture" )
				.find( ".picture-big img" )
				.attr( "src", src );
		} )

	$( ".picture-top-btn" )
		.on( "click", function () {
			var height = $( ".picture-list li" )
				.outerHeight( true );
			var scrollTop = $( ".picture-list-outer" )
				.scrollTop();
			$( ".picture-list-outer" )
				.scrollTop( scrollTop + height );
		} )
	$( ".picture-bottom-btn" )
		.on( "click", function () {
			var height = $( ".picture-list li" )
				.outerHeight( true );
			var scrollTop = $( ".picture-list-outer" )
				.scrollTop();
			$( ".picture-list-outer" )
				.scrollTop( scrollTop - height );
		} )
} )