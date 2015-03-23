/**
* Bricks - Components Initialisation
*
* @module Bricks.Components.Init
*/

/*
Requires:
	* jQuery
	* Underscore
Author(s):
	* Gareth Davies @GarethDavies_Me
Notes:
	* 
*/

;(function($, _, window, document, undefined) {

	'use strict';

	/**
	* Bricks Components Initialisation
	*
	* @class Bricks.Components.Init
	* @static
	* @param component {Object} The component to be initialised
	*/
	Bricks.Components.Init = function(component) {

		var
		$component = $(component),
		dataAttrs = $component.data(),
		options = {};

		/* Extract options */

		// For each data attribute on the component's root element
		_.each(dataAttrs, function(value, key) {

			// Add the option and its value to the options object
			options[key] = value;

		});

		// Add the component to the components list
		Bricks.Components.components.push(new Bricks.Components[options.type]($component, options));

	};

	// Initialise each component
	_.each($('[data-component="true"]'), Bricks.Components.Init);

})(jQuery, _, window, document);