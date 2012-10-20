var APP = require('core');

var activityIndicator = function() {
    "use strict";
	var actIndicator = Ti.UI.createActivityIndicator({
		height : 'auto',
		width : 'auto',
		font : {
			fontFamily : 'Arial',
			fontSize : 35,
			fontWeight : 'bold'
		},
		color : '#104F7F',
		message : 'Loading...',
		top : '45%',
		left : '35%'
	});

	APP.masterWindow.add(actIndicator);
	
	// show the activity indicator
	this.show = function() {			
		actIndicator.show();
	};
	
	// hide the activity indicator
	this.hide = function() {
		actIndicator.hide();
		APP.masterWindow.remove(actIndicator);
	};
};

module.exports = activityIndicator;
