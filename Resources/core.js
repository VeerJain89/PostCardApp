/**
 * Main app singleton
 * @type {Object}
 */
var APP = {
	/*
	 * Set constants for the application
	 */
	DEBUG_MODE : true,
	VERSION : "0.1",
	/*
	 * Require core modules
	 */
	HTTP : require("modules/http"),
	/*
	 * Require global style
	 */
	Styles : require("/app/ui/AppStyle"),
	Constants : require("/modules/Constants"),

	/**
	 * Keeps track of the current screen
	 * @type {Object}
	 */
	currentController : null,
	message : null,
	address : null,
	
	/**
	 * Sets the current orientation of the device constant
	 * @type {String}
	 */
	currentOrientation : (Ti.Gesture.orientation === Ti.UI.LANDSCAPE_LEFT || Ti.Gesture.orientation === Ti.UI.LANDSCAPE_RIGHT) ? "landscape" : "portrait",
	/**
	 * The main app window
	 * @type {Object}
	 */
	masterWindow : Ti.UI.createWindow({
		backgroundColor : "#666666"
	}),
	/**
	 * Sets up the app singleton and all it's child dependencies
	 * NOTE: This should only be fired in app.js file and only once.
	 */
	init : function() {
	    "use strict";
		// Global system Events
		//Commenting as it is not in use
		//Ti.Gesture.addEventListener("orientationchange", APP.orientationObserverUpdate);
		//Ti.Network.addEventListener("change", APP.networkObserverUpdate);
		//Ti.App.addEventListener("pause", APP.exit);
		//Ti.App.addEventListener("close", APP.exit);
		//Ti.App.addEventListener("resumed", APP.resume);

		/**
		 * Entry point logic for app here
		 */
		var LoginController = require(APP.Constants.controllerPath + APP.Constants.HomeController);
		APP.currentController = new LoginController();
		APP.masterWindow.add(APP.currentController.UI.wrapper);	
		APP.masterWindow.open();
	},
	/**
	 * Global function to remove current controller / screen
	 * @param {Function} callback
	 */
	removeCurrentScreen : function(callback) {
	    "use strict";
		if (APP.currentController && APP.currentController.UI.wrapper) {
			APP.masterWindow.remove(APP.currentController.UI.wrapper);
			APP.currentController.UI.wrapper=null;
			APP.currentController = null;
		}
		if (callback) {
			callback();
		}
	},
	/**
	 * Global orientation event handler
	 * @param  {Object} e Standard Ti callback
	 */
	orientationObserverUpdate : function(e) {
	    "use strict";
		// Shortcut for current orientation
		var type = (e.orientation === Ti.UI.LANDSCAPE_LEFT || e.orientation === Ti.UI.LANDSCAPE_RIGHT) ? "landscape" : "portrait";

		// Make sure it"s a different orientation before proceeding
		if (APP.currentOrientation !== type) {
			// If it"s an undesired orientation, just ignore
			if (e.orientation === Ti.UI.FACE_UP || e.orientation === Ti.UI.FACE_DOWN || e.orientation === Ti.UI.UNKNOWN) {
				return;
			}

			//Saves the current orientation
			APP.currentOrientation = type;

			// First check if controller has an orientation update (will always take precedence)
			if (APP.currentController && APP.currentController.orientationUpdate) {
				APP.currentController.orientationUpdate(type);
				// Otherwise check if the UI of this controller has an orientation update
			} else if (APP.currentController && APP.currentController.UI.orientationUpdate) {
				APP.currentController.UI.orientationUpdate(type);
			}
		}
	},
	/**
	 * Global network event handler
	 * @param  {Object} _event Standard Ti callback
	 */
	networkObserverUpdate : function(event) {
        "use strict";
	},
	/**
	 * Global event handler to change screens
	 * controller name
	 */
	navigationObserver : function(controller, displayUI) {
	    "use strict";
		if ( typeof (controller) !== "undefined") {			
		    //check for global events
		    if(APP.currentController.UI && APP.currentController.UI.removeGlobalEvents != null){
		        APP.currentController.UI.removeGlobalEvents();
		    }
			APP.currentControllerId = controller;
			//remove the current controller first then add
			APP.removeCurrentScreen(function() {
				var Controller = require(APP.Constants.controllerPath + APP.currentControllerId);
				APP.currentController = new Controller(displayUI);
				APP.currentController.UI.wrapper.left='100%';
				APP.masterWindow.add(APP.currentController.UI.wrapper);
				APP.currentController.UI.wrapper.animate(Ti.UI.createAnimation({
					left:'5dp',
					duration:500
				}));
			});
		} else {
			Ti.API.info("@APP.handleNavigation() - Index is undefined");
		}
	},
	/**
	 * Exit event observer
	 */
	exit : function() {
        "use strict";
	},
	/**
	 * Resume event observer
	 */
	resume : function() {
        "use strict";
	}
};

module.exports = APP;
