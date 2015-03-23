/**
* Brick - Hero Image Component
*
* @module Bricks.Component
* @submodule Bricks.Components.HeroImage
* @main Bricks.Component
*/

/*
Requires:
	* jQuery
	* Underscore
	* component.js
	* component-init.js
Author(s):
	* Gareth Davies @GarethDavies_Me
Notes:
	*
*/

;(function($, _, window, document, undefined) {

	'use strict';

	/**
	* Bricks Hero Image Component
	*
	* @class Bricks.Components.HeroImage
	* @constructor
	* @extends Bricks.Component
	* @param element {Element} The component container DOM element
	* @param component {String} The name of the component
	*/
	Bricks.Components.HeroImage = Bricks.Component.extend({

		/**
		* The number of frames
		*
		* @property frameCount
		*/
		exampleProperty: 0,

		/**
		* Reusable UI elements
		*
		* @property ui
		*/
		ui: {
			image: '.hero-image'
		},

		/**
		* Reusable UI elements
		*
		* @property ui
		*/
		events: {
			'click .hero-image': 'onClick'
		},

		/**
		* @method init 
		*/
		init: function() {

			// console.info(this);

			this.ui.image.attr('src', this.ui.image.data('url'));

		},

		/**
		* @method init
		*
		* @event click
		*/
		onClick: function() {

			console.info('click');

		}

	});

})(jQuery, _, window, document);