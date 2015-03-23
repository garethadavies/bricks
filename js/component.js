/**
* Bricks - Base Component
*
* @module Bricks.Component
*/

/*
Requires:
	* jQuery
	* Underscore
Author(s):
	* Gareth Davies @GarethDavies_Me
Notes:
	* This is the base file for all the components
*/


// Namespace
var Bricks = {};

// Objects to place all components
Bricks.Components = {};

;(function($, _, window, document, undefined) {

	'use strict';

	/**
	* Extend Helper
	* Helper function to correctly set up the prototype chain, for subclasses. Similar to goog.inherits, but uses a hash of prototype properties and class properties to be extended.
	*
	* @method extend
	* @return {Object} Extendable constructor
	*/
	var extend = function(protoProps, staticProps) {

		var
		parent = this,
		child,
		Surrogate;

		// The constructor function for the new subclass is either defined by you (the "constructor" property in your extend definition), or defaulted by us to simply call the parent's constructor.
		if (protoProps && _.has(protoProps, 'constructor')) {
			
			child = protoProps.constructor;
		
		}
		else {

			child = function(){ return parent.apply(this, arguments); };
		
		}

		// Add static properties to the constructor function, if supplied.
		_.extend(child, parent, staticProps);

		// Set the prototype chain to inherit from parent, without calling parent's constructor function.
		Surrogate = function() {

			this.constructor = child;

		};

		Surrogate.prototype = parent.prototype;
		child.prototype = new Surrogate();

		// Add prototype properties (instance properties) to the subclass, if supplied.
		if (protoProps) {

			_.extend(child.prototype, protoProps);

		}

		// Set a convenience property in case the parent's prototype is needed later.
		child.__super__ = parent.prototype;

		return child;

  	};

	/**
	* Bricks Base Component
	*
	* @class Bricks.Component
	* @constructor
	* @param element {Element} The component container DOM element
	* @param component {String} The name of the component
	*/
	Bricks.Component = function($component, options) {

		// make sure there is a options object
		options = options || {};

		// Add a unique id to the video instance
		this.cid = _.uniqueId(options.type);

		// Add the option to the instance
		this.options = options;

		// Attach the target element
		this.$element = $component;

		// Define all the UI elements supplied
		this.registerEvents.apply(this, arguments);

		// Register all events supplied
		this.defineUiElements.apply(this, arguments);

		// Initialise the script and send it this and arguments
		this.init.apply(this, arguments);

	};

	/**
	* Base Component Prototype
	*
	* @extends Bricks.Component.prototype
	*/
	_.extend(Bricks.Component.prototype, {

		/**
		* Cache component UI elements
		*
		* @method defineUiElements
		*/
		defineUiElements: function() {

			var
			that = this,
			uiElements = this.ui;

			// Return if there are no ui elements to cache
			if (!uiElements) return false;

			// Reset the UI object
			this.ui = {};

			// For each element defined in component
			_.each(uiElements, function(value, key) {

				// Add the jQuery object version to the ui object
				that.ui[key] = $(value, that.$element);
				
			});

		},

		/**
		* Register component event listeners
		*
		* @method registerEvents
		*/
		registerEvents: function() {

			var that = this;

			// Return if there are no events
			if (!this.events) return false;

			// For each element defined in component
			_.each(this.events, function(value, key) {

				that.eventOnOff('on', value, key);

			});

		},

		/**
		* Unbind component event listeners
		*
		* @method unbindEvents
		*/
		unbindEvents: function() {

			var that = this;

			// Return if there are no events
			if (!this.events) return false;

			// For each element defined in component
			_.each(this.events, function(value, key) {

				that.eventOnOff('off', value, key);

			});

		},

		/**
		* Extract the event configuration
		*
		* @method extractEventConfig
		* @param type {String} The method of choice (on or off)
		* @param value {String} The event's callback method
		* @param key {String} The event type and selector
		*/
		eventOnOff: function(type, value, key) {

			var
			that = this,
			splitted,
			separator = '',
			eventName = '';

			// Detect a class or id selector
			if (key.indexOf('.') !== -1) {

		separator = '.';

		// Split the key value
				splitted = key.split(separator);

			}
			else if (key.indexOf('#') !== -1) {

		separator = '#';

		// Split the key value
				splitted = key.split(separator);

			}
			else {

				separator = ' ';

		// Split the key value
				splitted = key.split(separator);

			}

			// Add a tap event automatically to click events
			eventName = ($.trim(splitted[0]) === 'click') ? 'click tap' : splitted[0];

			// Listen for the supplied event
			$(separator + splitted[1], that.$element)[type](eventName, function(e) {

				e.preventDefault();

		// Execute the method supplied and pass on the event object
		that[value](e);

			});

		},

		/**
		* Remove the component element
		*
		* @method removeElement
		* @param message {String} A message to replace the element with
		*/
		removeElement: function(options) {

			options = options || {};

			_.defaults(options, {
				message: ''
			});

			// Unbind all event listeners
			this.unbindEvents();

			// Do we have a meesage to show?
			if (options.message) {

				// Replace the component element
				this.$element.replaceWith('<p>' + options.message + '</p>');

			}
			else {

				// Remove the component element from the DOM
				this.$element.remove();
				
			}

		}

	});
	
	// Set up inheritance for the component
	Bricks.Component.extend = extend;

})(jQuery, _, window, document);






// Set options defaults
		// _.defaults(options, {

		// 	element: undefined,
		// 	component: undefined,
		// 	loadmode: 'auto',
		// 	animationmode: 'none',
		// 	parentComponent: undefined,
		// 	track: false,
		// 	trackadjust: 0,
		// 	lazyload: false

		// });




// Set property in viewport to correct value
		// this.inViewport = (Bricks.Utils.elementInViewport(this.$element)) ? true : false;

		// // Do we want to track the component is in viewport?
		// if (this.options.track) {

		// 	// Track the component
		// 	this.trackComponent.apply(this, arguments);

		// }



   //      /**
   //      * Track if component is in viewport
   //      *
   //      * @method trackComponent
   //      */
   //      trackComponent: function() {

   //      	var
   //      	that = this,
   //      	element = (this.options.parentComponent) ? this.$parentComponent : this.$element;

			// // Perfom initial check in case already in viewport
			// this.viewportMonitor(element);

			// // Update the value on scroll
   //      	$(window).scroll($.throttle(Bricks.Constants.THROTTLE_DEFAULT, function() {

   //      		that.viewportMonitor(element);

   //		  }));

   //      },

   //      /**
   //      * Perform tasks when component enters or leaves viewport
   //      *
   //      * @method viewportMonitor
   //      */
   //      viewportMonitor: function(element) {

   //      	var inViewport = this.inViewport;

			// // Set component property to correct value
			// this.inViewport = (Bricks.Utils.elementInViewport(element, this.options.trackadjust)) ? true : false;

			// // Check the time is right to fire the enter viewport method
			// if (_.isFunction(this._onEnterViewport) && inViewport !== this.inViewport && this.inViewport) {

			// 	this._onEnterViewport();

			// }
			// // Check the time is right to fire the exit viewport method
			// else if (_.isFunction(this._onExitViewport) && inViewport !== this.inViewport && !this.inViewport) {

			// 	this._onExitViewport();

			// }

			// // Mark initial check as done
			// this.viewportChecked = true;

   //      },

   //      /**
   //      * Lazy load images if required
   //      *
   //      * @method lazyLoadImages
   //      */
   //      lazyLoadImages: function() {

   //      	// Request lazy loading of images
   //      	new Bricks.Helpers.LazyLoad({
   //      		element: this.$element,
   //      		loader: this.options.lazyloader,
   //      		lazyIE8: this.options.lazyie8,
   //      	});

   //      }