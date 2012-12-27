// Module dependencies
var Styles = require('app/ui/CreateCard/styles');
var APP = require('core');
var httpHelper = require('modules/http');
/**
 * The main view for this screen
 * wrapper object act as the base view for other controls
 * @type {Object}
 */

function Preview() {"use strict";
    var self = this;

    /**
     * Container
     * @type {Object}
     * */
    this.wrapper = Ti.UI.createScrollView(Styles.wrapper);
    
	this.previewLabel = Ti.UI.createLabel(Styles.previewLabel);
	
	this.postCardBack = Ti.UI.createView(Styles.postCardBack);
	this.postCardView = Ti.UI.createImageView(Styles.postCardView);
	this.postCardView.image='/app/assets/postaddress.png';
	
	this.flipView = Ti.UI.createView(Styles.flipView);
	this.flipText = Ti.UI.createLabel(Styles.flipText);
	this.sendbutton = Ti.UI.createButton(Styles.sendbutton);
	this.addMapView = Ti.UI.createView(Styles.addMapView);
	this.previewImage = Ti.UI.createView(Styles.previewImage);
	this.previewMsgAddr = Ti.UI.createView(Styles.previewMsgAddr);
	this.addMapView.top = '50%';
	//this.addMapView.touchEnabled = 'false';
	
	this.messageLabel=Ti.UI.createLabel(Styles.messageLabel);
	
	this.addressLabel=Ti.UI.createLabel(Styles.addressLabel);
	
	if(APP.message){
		this.messageLabel.text=APP.message;
	}
	if(APP.address){
		this.addressLabel.text=APP.address;
	}
	
	
	//below 2 views are clickable to enable flipping between image and msg views
	this.flipView.add(this.previewImage);
	this.flipView.add(this.previewMsgAddr);
	
	//display the image preview of the postcard
	this.previewImage.addEventListener('click',function(){
		self.messageLabel.visible=false;
		self.addressLabel.visible=false;
		self.postCardView.image=APP.image;
	})
	
	//display the message preview of the postcard
	this.previewMsgAddr.addEventListener('click',function(){
		self.messageLabel.visible=true;
		self.addressLabel.visible=true;
		self.postCardView.image='/app/assets/postaddress.png';
	})
	
	this.postCardBack.add(this.postCardView);
	this.postCardBack.add(this.messageLabel);
	this.postCardBack.add(this.addressLabel);
	this.postCardBack.add(this.addMapView);
	
	this.wrapper.add(this.previewLabel);
	this.wrapper.add(this.postCardBack);
	this.wrapper.add(this.flipView);
	this.wrapper.add(this.flipText);
	this.wrapper.add(this.sendbutton);
}

module.exports = Preview;
