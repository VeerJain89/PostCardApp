// Module dependencies
var Styles = require('app/ui/CreateCard/styles');
var APP = require('core');
var httpHelper = require('/modules/http');
/**
 * The main view for this screen
 * wrapper object act as the base view for other controls
 * @type {Object}
 */

function CreateCard() {"use strict";
    var self = this;

    /**
     * Container
     * @type {Object}
     * */
    this.wrapper = Ti.UI.createScrollView(Styles.wrapper);
    
	this.createCardLabel = Ti.UI.createLabel({
		top : 10,
		left : 10,
		color : 'orange',
		font : {
			fontSize : 24
		},
		text : 'Create Card'
	});
	
	this.cardImageView = Ti.UI.createView({
		backgroundColor:'#666666',
		width:290,
		height:180,
		top:10
	});
	
	this.imageOptionView = Ti.UI.createView({
		height:120,
		width:280
	});
	
	this.editImageView = Ti.UI.createView({
		left:30,
		height:60,
		width:58,
		backgroundImage : 'app/assets/editImage.png'
	});
	
	this.editImageLabel = Ti.UI.createLabel({
		top:90,
		left:25,
		text:'Edit Image'
	});
	
	this.changeImageView = Ti.UI.createView({
		left:125,
		height:60,
		width:151,
		backgroundImage : 'app/assets/changeImage.png'
	});
	
	this.changeImageLabel = Ti.UI.createLabel({
		top:90,
		left:145,
		text:'Change Image'
	});
	
	this.imageOptionView.add(this.editImageView);
	this.imageOptionView.add(this.editImageLabel);
	this.imageOptionView.add(this.changeImageView);
	this.imageOptionView.add(this.changeImageLabel);
	
	this.wrapper.add(this.createCardLabel);
	this.wrapper.add(this.cardImageView);
	this.wrapper.add(this.imageOptionView);
	
}

module.exports = CreateCard;
