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
		width : 320,
		height : 50,
		backgroundImage : 'app/assets/header.png',
		zIndex : 50
	});

	this.homeButton = Ti.UI.createView({
		left : 10,
		width : 33,
		height : 30,
		backgroundImage : 'app/assets/homeButton.png'
	});

	this.headerLogo = Ti.UI.createImageView({
		image : 'app/assets/headerLogo.png',
		width : 107,
		height : 30,
	});

	this.backButton = Ti.UI.createButton({
		right : 10,
		backgroundImage : 'app/assets/backButton.png',
		width : 70,
		height : 30,
		visible : false
	});

	this.signInButton = Ti.UI.createButton({
		right : 10,
		backgroundImage : 'app/assets/signInButton.png',
		width : 66,
		height : 28
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
