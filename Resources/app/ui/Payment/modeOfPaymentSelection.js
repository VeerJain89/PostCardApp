// Module dependencies
var Styles = require('app/ui/Payment/styles');
var APP = require('core');
var httpHelper = require('modules/http');
/**
 * The main view for this screen
 * wrapper object act as the base view for other controls
 * @type {Object}
 */

function ModeOfPaymentSelection() {"use strict";
    var self = this;

    /**
     * Container
     * @type {Object}
     * */
    this.wrapper = Ti.UI.createScrollView(Styles.wrapper);
    
	this.paymentLabel = Ti.UI.createLabel(Styles.paymentLabel);
	this.priceTagLabel = Ti.UI.createLabel(Styles.priceTagLabel);
	
	this.cardImageView = Ti.UI.createView(Styles.cardImageView);
	this.paymentOptionsView = Ti.UI.createView(Styles.paymentOptionsView);
	this.confirmButton = Ti.UI.createButton(Styles.confirmButton);
	this.cardImageView = Ti.UI.createView(Styles.cardImageView);
	this.paymentOptionLabel = Ti.UI.createLabel(Styles.paymentOptionLabel);
	
	this.wrapper.add(this.paymentLabel);
	this.wrapper.add(this.priceTagLabel);
	this.wrapper.add(this.cardImageView);
	this.paymentOptionsView.add(this.paymentOptionLabel);
	this.wrapper.add(this.paymentOptionsView);
	this.wrapper.add(this.confirmButton);
}

module.exports = ModeOfPaymentSelection;
