// Module dependencies
var Styles = {

};
var APP = require('core');
/**
 * Users UI Module
 * @constructor
 */
function HeaderUI() {"use strict";
	var self = this;

	this.headerView = Ti.UI.createView({
		top : 0,
		left : 0,
		width : Ti.UI.FILL,
		height : Ti.Platform.osname==='android'?'10.9%':50,
		backgroundImage : '/app/assets/header.png',
		zIndex : 50
	});

	this.homeButton = Ti.UI.createView({
		left : 10,
		width : Ti.Platform.osname==='android'?'10.31%':33,
		height : Ti.Platform.osname==='android'?'60%':30,
		backgroundImage : '/app/assets/homeButton.png'
	});

	this.headerLogo = Ti.UI.createImageView({
		image : '/app/assets/headerLogo.png',
		width : Ti.Platform.osname==='android'?'33.44%':107,
		height : Ti.Platform.osname==='android'?'60%':30,
	});

	this.backButton = Ti.UI.createButton({
		right : 10,
		backgroundImage : '/app/assets/backButton.png',
		width : Ti.Platform.osname==='android'?'21.87%':70,
		height : Ti.Platform.osname==='android'?'60%':30,
		visible : false
	});

	this.signInButton = Ti.UI.createButton({
		right : 10,
		backgroundImage : '/app/assets/signInButton.png',
		width : Ti.Platform.osname==='android'?'20.62%':66,
		height : Ti.Platform.osname==='android'?'56%':28
	});

	this.homeButton.addEventListener('click', function() {
		if (APP.tabBar) {
			APP.tabBar.tabBarView.visible = false;
		}
		self.headerView.visible = false;
		APP.navigationObserver(APP.Constants.HomeController);
	});

	this.signInButton.addEventListener('click', function() {
		APP.navigationObserver(APP.Constants.LoginController);
	});

	this.backButton.addEventListener('click', function() {
		APP.navigationObserver(APP.Constants.CreateCardController,APP.currentView);
	});

	this.headerView.add(this.homeButton);
	this.headerView.add(this.headerLogo);
	this.headerView.add(this.backButton);
	this.headerView.add(this.signInButton);
}

module.exports = HeaderUI;
