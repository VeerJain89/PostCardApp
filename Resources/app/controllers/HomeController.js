// Module dependencies
var APP = require('core');
var UI = require('app/ui/Home/home');
var httpHelper = require('modules/http');
var TabBar = require('modules/tabBar');
var social = require('modules/social');

/**
 * Project controller module
 * @constructor
 */
function HomeController(displayView) {"use strict";
	var self = this;

	this.UI = new UI();

	if (APP.tabBar) {
		APP.masterWindow.remove(APP.tabBar.tabBarView);
		APP.tabBar.tabBarView = null;
		APP.tabBar = null;
	}

	this.UI.fbView.addEventListener('singletap', function() {
		// get the app ID in facebook developpers
		Titanium.Facebook.appid = "125910484245391";
		if (Titanium.Facebook.loggedIn) {
			self.UI.mainView.visible = true;
			self.UI.fbView.visible = false;
		} else {
			Titanium.Facebook.authorize();
			Titanium.Facebook.addEventListener('login', function(f) {
				Titanium.API.info('FACEBOOK LOGIN DATA' + JSON.stringify(f.data));
				if (f.data) {
					self.UI.mainView.visible = true;
					self.UI.fbView.visible = false;
				}

			});
		}

	}); 

	this.UI.createCardView.addEventListener('click', function() {
		var TabBarUI = new TabBar();
		APP.masterWindow.add(TabBarUI.tabBarView);
		APP.tabBar = TabBarUI;
		APP.navigationObserver(APP.Constants.CreateCardController, APP.Constants.CreateCardView);
	});

}

module.exports = HomeController;
