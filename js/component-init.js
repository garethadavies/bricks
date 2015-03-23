/**
* Bricks - Components Initialisation
*
* @module Bricks.Components.Init
*/

/*
Requires:
	* jQuery
	* Underscore
	* component.js
Author(s):
	* Gareth Davies @GarethDavies_Me
Notes:
	* Makes ure this file is included/required after all the components
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

		// For each data attribute on the component's root element
		_.each(dataAttrs, function(value, key) {

			// Add the option and its value to the options object
			options[key] = value;

		});

		// Create new component instance
		new Bricks.Components[options.type]($component, options);

	};

	// Initialise each component
	_.each($('[data-component="true"]'), Bricks.Components.Init);

})(jQuery, _, window, document);