// Module dependencies
var APP = require('core');
var UI = require('app/ui/CreateCard/addAddress');
/**
 * Login controller module
 * @constructor
 */
function AddAddressController() {"use strict";
	var self = this;
	// Obligatory 'this' reference
	/**
	 * The UI object for this controller
	 * @type {Object}
	 */
	this.UI = new UI();
	this.UI.nextButton.addEventListener('click', function() {
		APP.address = self.UI.fNameText.value + ' ' + self.UI.lNameText.value + '\n';
		APP.address += self.UI.address1Text.value + ' ' + self.UI.address2Text.value + ' ' + self.UI.address3Text.value + '\n';
		APP.address += self.UI.cityText.value + ' ' + self.UI.stateText.value + '\n';
		APP.address += self.UI.zipText.value; 
		APP.navigationObserver(APP.Constants.CreateCardController, APP.Constants.WriteMsgView);
	});
	APP.header.signInButton.visible = false;
	APP.header.backButton.visible = true;
	APP.tabBar.tabBarView.visible = false;

}

module.exports = AddAddressController;