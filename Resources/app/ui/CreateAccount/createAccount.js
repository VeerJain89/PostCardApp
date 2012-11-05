// Module dependencies
var Styles = require('app/ui/CreateAccount/styles');
var APP = require('core');

/**
 * Users UI Module
 * @constructor
 */
function CreateAccountUI() {"use strict";
	var self = this;
	/**
	 * The main view for this screen
	 * @type {Object}
	 */
	this.wrapper = Ti.UI.createView(Styles.wrapper);

	this.createAccountLabel = Ti.UI.createLabel(Styles.createAccountLabel);
	
	this.fNameText = Ti.UI.createTextField(Styles.fNameText);
	
	this.lNameText = Ti.UI.createTextField(Styles.lNameText);
	
	this.emailText = Ti.UI.createTextField(Styles.emailText);

	this.passwordText = Ti.UI.createTextField(Styles.passwordText);
	
	this.agreeCheckBoxView = Ti.UI.createView(Styles.agreeCheckBoxView);
	
	this.checkBox = Ti.UI.createSwitch(Styles.checkBox);
	
	this.agreeText = Ti.UI.createLabel(Styles.agreeText);
	
	this.createAccountButton = Ti.UI.createButton(Styles.createAccountButton);
	
	this.agreeCheckBoxView.add(this.checkBox);
	this.agreeCheckBoxView.add(this.agreeText);
	
	this.wrapper.add(this.createAccountLabel);
	this.wrapper.add(this.fNameText);
	this.wrapper.add(this.lNameText);
	this.wrapper.add(this.emailText);
	this.wrapper.add(this.passwordText);
	this.wrapper.add(this.agreeCheckBoxView);
	this.wrapper.add(this.createAccountButton);
	
}

module.exports = CreateAccountUI;
