// Module dependencies
var APP = require('core');
var UI = require('app/ui/login/login');
var Header = require('modules/Header');
var TabBar = require('modules/tabBar');
/**
 * Login controller module
 * @constructor
 */
function LoginController() {
    "use strict";
    var self = this;
    // Obligatory 'this' reference
    /**
     * The UI object for this controller
     * @type {Object}
     */
    this.UI = new UI();
	
	var HeaderUI = new Header();
	APP.masterWindow.add(HeaderUI.headerView);
	
	
	this.UI.signInButton.addEventListener('click',function(){
		var TabBarUI = new TabBar();
		APP.masterWindow.add(TabBarUI.tabBarView);
		//APP.navigationObserver();
	});
    // Handle events
    // this.UI.submit.addEventListener('singletap', function() {
        // var userName = self.UI.username.value, pwd = self.UI.password.value;
// 
        // if (userName === "" || pwd === "") {
            // alert(APP.Constants.LoginValidation);
            // return;
        // }
// 
        // if (Ti.Network.online) {
// 
        // } else {
//        
        // }
// 
    // });
}

module.exports = LoginController;
