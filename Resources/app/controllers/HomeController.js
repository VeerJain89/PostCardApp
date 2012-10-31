// Module dependencies
var APP = require('core');
var UI = require('app/ui/Home/home');
var httpHelper = require('modules/http');
var TabBar = require('modules/tabBar');

/**
 * Project controller module
 * @constructor
 */
function HomeController(displayView) {"use strict";
	var self = this;

	this.UI = new UI();

	if (APP.tabBar) {
		APP.masterWindow.remove(APP.tabBar.tabBarView);
		APP.tabBar.tabBarView=null;
		APP.tabBar=null;
	}
	
	this.UI.createCardView.addEventListener('click', function() {
			var TabBarUI = new TabBar();
			APP.masterWindow.add(TabBarUI.tabBarView);
			APP.tabBar = TabBarUI;
		APP.navigationObserver(APP.Constants.CreateCardController,APP.Constants.CreateCardView);
	});

}

module.exports = HomeController;
