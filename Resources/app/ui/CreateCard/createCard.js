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
    
	this.createCardLabel = Ti.UI.createLabel(Styles.createCardLabel);
	
	this.cardImageView = Ti.UI.createView(Styles.cardImageView);
	
	this.imageOptionView = Ti.UI.createView(Styles.imageOptionView);
	
	this.editImageView = Ti.UI.createView(Styles.editImageView);
	
	this.editImageLabel = Ti.UI.createLabel(Styles.editImageLabel);
	
	this.changeImageView = Ti.UI.createView(Styles.changeImageView);
	
	this.changeImageLabel = Ti.UI.createLabel(Styles.changeImageLabel);
	
	this.imageOptionView.add(this.editImageView);
	this.imageOptionView.add(this.editImageLabel);
	this.imageOptionView.add(this.changeImageView);
	this.imageOptionView.add(this.changeImageLabel);
	
	this.wrapper.add(this.createCardLabel);
	this.wrapper.add(this.cardImageView);
	this.wrapper.add(this.imageOptionView);
	
}

module.exports = CreateCard;
