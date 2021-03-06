// Module dependencies
var APP = require('core');
var UI = require('app/ui/login/login');
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
	
	APP.header.signInButton.visible=false;
	APP.header.backButton.visible=true;
	APP.tabBar.tabBarView.visible=false;
	
	this.UI.createNewButton.addEventListener('click',function(){
		APP.navigationObserver(APP.Constants.CreateAccountController);
	});
}

module.exports = LoginController;
