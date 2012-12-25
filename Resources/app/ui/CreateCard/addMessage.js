// Module dependencies
var Styles = require('app/ui/CreateCard/styles');
var APP = require('core');

/**
 * Users UI Module
 * @constructor
 */
function AddMessageUI() {"use strict";
	var self = this;
	/**
	 * The main view for this screen
	 * @type {Object}
	 */
	this.wrapper = Ti.UI.createView(Styles.wrapper);
	
	this.messageTextArea = Ti.UI.createTextArea(Styles.messageTextArea);
	
	this.nextButton = Ti.UI.createButton(Styles.nextButton);
	
	this.wrapper.add(this.messageTextArea);
	this.wrapper.add(this.nextButton);
	}

module.exports = AddMessageUI;

	