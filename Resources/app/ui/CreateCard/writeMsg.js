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
    
	this.writeMsgLabel = Ti.UI.createLabel({
		top : 10,
		left : 10,
		color : 'orange',
		font : {
			fontSize : 24
		},
		text : 'Write Message'
	});
	
	this.postCardView = Ti.UI.createView({
		backgroundImage:'app/assets/postcard.png',
		width:290,
		height:180,
		top:10
	});
	
	this.messageView = Ti.UI.createView({
		height:120,
		width:280
	});
	
	this.addMsgView = Ti.UI.createView({
		left:45,
		height:60,
		width:55,
		backgroundImage : 'app/assets/addMessage.png'
	});
	
	this.addMsgLabel = Ti.UI.createLabel({
		top:90,
		left:20,
		text:'Add Message'
	});
	
	this.addAddressView = Ti.UI.createView({
		left:175,
		height:56,
		width:51,
		backgroundImage : 'app/assets/addAddress.png'
	});
	
	this.addAddressLabel = Ti.UI.createLabel({
		top:90,
		left:155,
		text:'Add Address'
	});
	
	this.messageView.add(this.addMsgView);
	this.messageView.add(this.addAddressView);
	this.messageView.add(this.addMsgLabel);
	this.messageView.add(this.addAddressLabel);
	
	this.wrapper.add(this.writeMsgLabel);
	this.wrapper.add(this.postCardView);
	this.wrapper.add(this.messageView);
}

module.exports = WriteMsg;
