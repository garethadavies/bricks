/**
* Bricks - Component Configuration
*
* @module Bricks
*/

/*
Requires:
	* jQuery
	* Underscore
	* main.js
Author(s):
	* Gareth Davies @GarethDavies_Me
Notes:
	* Add your component to the config array and the component-init.js file will do the rest
	* As soon as the v1 video component is completely replace, option detection can be moved into the component-init.js file and the arrays remove from this file
*/

;(function($, _, window, document, undefined) {

	'use strict';

	/* Component Configuration */

	Bricks.Components.config = [
		{
			prefix: '.selectAndGo'
		},
		{
			prefix: '.cave'
		},
		{
			prefix: '.buttonGroup'
		},
		{
			prefix: '.frameSlider'
		},
		{
			prefix: '.tabbedLayout'
		},
		{
			prefix: 'video',
			parentComponent: '.singleVideo-container',
			options: {
				singleVideo: true
			}
		},
		{
			prefix: 'video',
			parentComponent: '.doubleVideo-container',
			options: {
				singleVideo: false
			}
		},
		{
			prefix: '.galleryV2'
		},
		{
			prefix: '.youTube',
			parentComponent: '.singleVideo-container',
			options: {
				singleVideo: true
			}
		},
		{
			prefix: '.youTube',
			parentComponent: '.doubleVideo-container',
			options: {
				singleVideo: false
			}
		},
		{
			prefix: '.heroVideo',
			// options: ['autoplay', 'muted']
		},
		{
			prefix: '.modelDisplay'
		},
		{
			prefix: '.accolades'
		},
		{
			prefix: '.interior360'
		},
		{
			prefix: '.hideAndReveal'
		},
		{
			prefix: '.modelCompare',
		},
		{
			prefix: '.accordion'
		},
		{
			prefix: '.dropdownNav'
		},
		{
			prefix: '.nameplateSpecification'
		},
		{
			prefix: '.interactiveSliderXray'
		}
	];

})(jQuery, _, window, document);