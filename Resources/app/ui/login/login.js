// Module dependencies
var Styles = require('app/ui/login/styles');
var APP = require('core');

/**
 * Users UI Module
 * @constructor
 */
function LoginUI() {"use strict";
	var self = this;
	/**
	 * The main view for this screen
	 * @type {Object}
	 */
	this.wrapper = Ti.UI.createView(Styles.wrapper);

	this.myAccountLabel = Ti.UI.createLabel(Styles.myAccountLabel);

	this.emailLabel = Ti.UI.createLabel(Styles.emailLabel);

	this.emailText = Ti.UI.createTextField(Styles.emailText);

	this.passwordLabel = Ti.UI.createLabel(Styles.passwordLabel);

	this.passwordText = Ti.UI.createTextField(Styles.passwordText);

	this.signInButton = Ti.UI.createButton(Styles.signInButton);
	
	this.separator = Ti.UI.createImageView(Styles.separator);
	
	this.createNewButton = Ti.UI.createButton(Styles.createNewButton);
	
	this.wrapper.add(this.myAccountLabel);
	this.wrapper.add(this.emailLabel);
	this.wrapper.add(this.emailText);
	this.wrapper.add(this.passwordLabel);
	this.wrapper.add(this.passwordText);
	this.wrapper.add(this.signInButton);
	this.wrapper.add(this.separator);
	this.wrapper.add(this.createNewButton);
}

module.exports = LoginUI;
