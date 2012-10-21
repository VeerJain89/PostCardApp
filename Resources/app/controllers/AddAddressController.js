// Module dependencies
var APP = require('core');
var UI = require('app/ui/CreateCard/addAddress');
/**
 * Login controller module
 * @constructor
 */
function AddAddressController() {
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

}

module.exports = AddAddressController;
