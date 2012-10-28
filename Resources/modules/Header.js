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
		height : 50,
		backgroundImage : '/app/assets/header.png',
		zIndex : 50
	});

	this.homeButton = Ti.UI.createView({
		left : 10,
		width : Ti.Platform.osname==='android'?'(33/Screen_Width)%':33,
		height : Ti.Platform.osname==='android'?'(30/Screen_Height)%':30,
		backgroundImage : '/app/assets/homeButton.png'
	});

	this.headerLogo = Ti.UI.createImageView({
		image : '/app/assets/headerLogo.png',
		width : Ti.Platform.osname==='android'?'(107/Screen_Width)%':107,
		height : Ti.Platform.osname==='android'?'(30/Screen_Height)%':30,
	});

	this.backButton = Ti.UI.createButton({
		right : 10,
		backgroundImage : '/app/assets/backButton.png',
		width : Ti.Platform.osname==='android'?'(70/Screen_Width)%':70,
		height : Ti.Platform.osname==='android'?'(30/Screen_Height)%':30,
		visible : false
	});

	this.signInButton = Ti.UI.createButton({
		right : 10,
		backgroundImage : '/app/assets/signInButton.png',
		width : Ti.Platform.osname==='android'?'(66/Screen_Width)%':66,
		height : Ti.Platform.osname==='android'?'(28/Screen_Height)%':28
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
