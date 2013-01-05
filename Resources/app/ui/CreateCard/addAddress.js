// Module dependencies
var Styles = require('app/ui/CreateCard/addressStyles');
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
	this.wrapper = Ti.UI.createView(Styles.wrapper);

	this.addAddressLabel = Ti.UI.createLabel(Styles.addAddressLabel);

	this.phoneBookView = Ti.UI.createView(Styles.phoneBookView);

	this.fNameText = Ti.UI.createTextField(Styles.fNameText);
	
	this.lNameText = Ti.UI.createTextField(Styles.lNameText);
	
	this.address1Text = Ti.UI.createTextField(Styles.address1Text);

	this.address2Text = Ti.UI.createTextField(Styles.address2Text);
	
	this.address3Text = Ti.UI.createTextField(Styles.address3Text);
	
	this.cityText = Ti.UI.createTextField(Styles.cityText);
	
	this.stateText = Ti.UI.createTextField(Styles.stateText);
	
	this.zipText = Ti.UI.createTextField(Styles.zipText);
	
	this.nextButton = Ti.UI.createButton(Styles.nextButton);

	this.wrapper.add(this.addAddressLabel);
	this.wrapper.add(this.phoneBookView);
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
