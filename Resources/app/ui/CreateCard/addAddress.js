// Module dependencies
//var Styles = require('app/ui/login/styles');
var APP = require('core');

/**
 * Users UI Module
 * @constructor
 */
function AddAddressUI() {"use strict";
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

	this.addAddressLabel = Ti.UI.createLabel({
		top : 10,
		left : 10,
		color : 'orange',
		font : {
			fontSize : 24
		},
		text : 'Add Address'
	});
	
	this.fNameText = Ti.UI.createTextField({
		backgroundImage : 'app/assets/textBox.png',
		top : 7,
		width : 280,
		height : 30,
		hintText:'First Name'
	});
	
	this.lNameText = Ti.UI.createTextField({
		backgroundImage : 'app/assets/textBox.png',
		top : 7,
		width : 280,
		height : 30,
		hintText:'Last Name'
	});
	
	this.address1Text = Ti.UI.createTextField({
		backgroundImage : 'app/assets/textBox.png',
		top : 7,
		width : 280,
		height : 30,
		hintText:'Address Line 1'
	});

	this.address2Text = Ti.UI.createTextField({
		backgroundImage : 'app/assets/textBox.png',
		top : 7,
		width : 280,
		height : 30,
		hintText:'Address Line 2'
	});
	
	this.address3Text = Ti.UI.createTextField({
		backgroundImage : 'app/assets/textBox.png',
		top : 7,
		width : 280,
		height : 30,
		hintText:'Address Line 3'
	});
	
	this.cityText = Ti.UI.createTextField({
		backgroundImage : 'app/assets/textBox.png',
		top : 7,
		width : 280,
		height : 30,
		hintText:'City'
	});
	
	this.stateText = Ti.UI.createTextField({
		backgroundImage : 'app/assets/textBox.png',
		top : 7,
		width : 280,
		height : 30,
		hintText:'State'
	});
	
	this.zipText = Ti.UI.createTextField({
		backgroundImage : 'app/assets/textBox.png',
		top : 7,
		width : 280,
		height : 30,
		hintText:'Postal/Zip Code'
	});
	
	this.nextButton = Ti.UI.createButton({
		top:10,
		width : 220,
		height : 30,
		backgroundImage : 'app/assets/button.png',
		title : 'Next'
	});

	this.wrapper.add(this.addAddressLabel);
	this.wrapper.add(this.fNameText);
	this.wrapper.add(this.lNameText);
	this.wrapper.add(this.address1Text);
	this.wrapper.add(this.address2Text);
	this.wrapper.add(this.address3Text);
	this.wrapper.add(this.cityText);
	this.wrapper.add(this.stateText);
	this.wrapper.add(this.zipText);
	this.wrapper.add(this.nextButton);
}

module.exports = AddAddressUI;
