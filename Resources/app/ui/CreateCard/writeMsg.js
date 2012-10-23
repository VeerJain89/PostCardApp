// Module dependencies
var Styles = require('app/ui/CreateCard/styles');
var APP = require('core');
var httpHelper = require('/modules/http');
/**
 * The main view for this screen
 * wrapper object act as the base view for other controls
 * @type {Object}
 */

function WriteMsg() {"use strict";
    var self = this;

    /**
     * Container
     * @type {Object}
     * */
    this.wrapper = Ti.UI.createScrollView(Styles.wrapper);
    
	this.writeMsgLabel = Ti.UI.createLabel(Styles.writeMsgLabel);
	
	this.postCardView = Ti.UI.createView(Styles.postCardView);
	
	this.messageView = Ti.UI.createView(Styles.messageView);
	
	this.addMsgView = Ti.UI.createView(Styles.addMsgView);
	
	this.addMsgLabel = Ti.UI.createLabel(Styles.addMsgLabel);
	
	this.addAddressView = Ti.UI.createView(Styles.addAddressView);
	
	this.addAddressLabel = Ti.UI.createLabel(Styles.addAddressLabel);
	
	this.messageView.add(this.addMsgView);
	this.messageView.add(this.addAddressView);
	this.messageView.add(this.addMsgLabel);
	this.messageView.add(this.addAddressLabel);
	
	this.wrapper.add(this.writeMsgLabel);
	this.wrapper.add(this.postCardView);
	this.wrapper.add(this.messageView);
}

module.exports = WriteMsg;
