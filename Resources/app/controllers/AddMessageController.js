// Module dependencies
var APP = require('core');
var UI = require('app/ui/CreateCard/addMessage');
/**
 * Login controller module
 * @constructor
 */
function AddMessageController() {"use strict";
	var self = this;
	// Obligatory 'this' reference
	/**
	 * The UI object for this controller
	 * @type {Object}
	 */
	this.UI = new UI();
	this.UI.nextButton.addEventListener('click', function() {
		APP.message = self.UI.messageTextArea.value;
		APP.signature = self.UI.signatureView;
		APP.navigationObserver(APP.Constants.CreateCardController, APP.Constants.WriteMsgView);
	});
	APP.header.signInButton.visible = false;
	APP.header.backButton.visible = true;
	APP.tabBar.tabBarView.visible = false;

}

module.exports = AddMessageController;
