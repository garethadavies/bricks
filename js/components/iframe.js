/**
* Brick - Iframe Component
*
* @module Bricks.Component
* @submodule Bricks.Components.Iframe
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
	* Bricks Iframe Component
	*
	* @class Bricks.Components.Iframe
	* @constructor
	* @extends Bricks.Component
	* @param element {Element} The component container DOM element
	* @param component {String} The name of the component
	*/
	Bricks.Components.Iframe = Bricks.Component.extend({

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
			iframe: 'iframe'
		},

		/**
		* @method init 
		*/
		init: function() {

			// console.info(this);

			this.ui.iframe.attr('height', this.options.height);
			this.ui.iframe.attr('width', this.options.width);

		}

	});

})(jQuery, _, window, document);