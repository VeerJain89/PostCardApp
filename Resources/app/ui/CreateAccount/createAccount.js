// Module dependencies
//var Styles = require('app/ui/login/styles');
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
	this.wrapper = Ti.UI.createView({
        top:50,
        layout : 'vertical',
        width:310,
        backgroundColor:'white',
        height:400
    });

	this.createAccountLabel = Ti.UI.createLabel({
		top : 10,
		left : 10,
		color : 'orange',
		font : {
			fontSize : 24
		},
		text : 'Create Account'
	});
	
	this.fNameText = Ti.UI.createTextField({
		backgroundImage : 'app/assets/textBox.png',
		top : 10,
		width : 280,
		height : 30,
		hintText:'First Name'
	});
	
	this.lNameText = Ti.UI.createTextField({
		backgroundImage : 'app/assets/textBox.png',
		top : 10,
		width : 280,
		height : 30,
		hintText:'Last Name'
	});
	
	this.emailText = Ti.UI.createTextField({
		backgroundImage : 'app/assets/textBox.png',
		top : 10,
		width : 280,
		height : 30,
		hintText:'Email Address'
	});

	this.passwordText = Ti.UI.createTextField({
		backgroundImage : 'app/assets/textBox.png',
		top : 10,
		width : 280,
		height : 30,
		hintText:'Password'
	});
	
	this.agreeCheckBoxView = Ti.UI.createView({
		top:110,
		height:20,
		width:Ti.UI.SIZE
	});
	
	this.checkBox = Ti.UI.createImageView({
		backgroundImage:'app/assets/checkbox.png',
		height:15,
		width:15,
		left:5
	});
	
	this.agreeText = Ti.UI.createLabel({
		left:25,
		text:'I agree to Terms and Conditions.'
	});
	
	this.createAccountButton = Ti.UI.createButton({
		top:20,
		width : 220,
		height : 30,
		backgroundImage : 'app/assets/button.png',
		title : 'Create Account'
	});
	
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
