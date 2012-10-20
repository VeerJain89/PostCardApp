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

	this.myAccountLabel = Ti.UI.createLabel({
		top : 10,
		left : 10,
		color : 'orange',
		font : {
			fontSize : 24
		},
		text : 'My Account'
	});

	this.emailLabel = Ti.UI.createLabel({
		top : 30,
		left : 20,
		text : 'Email Address'
	})

	this.emailText = Ti.UI.createTextField({
		backgroundImage : 'app/assets/textBox.png',
		top : 5,
		width : 280,
		height : 30
	});

	this.passwordLabel = Ti.UI.createLabel({
		top : 5,
		left : 20,
		text : 'Email Address'
	})

	this.passwordText = Ti.UI.createTextField({
		backgroundImage : 'app/assets/textBox.png',
		top : 5,
		width : 280,
		height : 30
	});

	this.signInButton = Ti.UI.createButton({
		top : 10,
		width : 220,
		height : 30,
		backgroundImage : 'app/assets/button.png',
		title : 'Sign In'
	});
	
	this.separator = Ti.UI.createImageView({
		backgroundImage:'app/assets/separator.png',
		height:6,
		width:300,
		top:10
	});
	
	this.createNewButton = Ti.UI.createButton({
		top : 10,
		width : 220,
		height : 30,
		backgroundImage : 'app/assets/button.png',
		title : 'Create New Account'
	});
	
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
