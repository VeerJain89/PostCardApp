// Module dependencies
var Styles = require('app/ui/Payment/styles');
var APP = require('core');
var httpHelper = require('modules/http');
/**
 * The main view for this screen
 * wrapper object act as the base view for other controls
 * @type {Object}
 */

function MakePayment() {"use strict";
    var self = this;

    /**
     * Container
     * @type {Object}
     * */
    this.wrapper = Ti.UI.createScrollView(Styles.wrapper);
    
	this.paymentLabel = Ti.UI.createLabel(Styles.paymentLabel);
	
	this.creditCardPaymentView = Ti.UI.createView(Styles.creditCardPaymentView);
	
	this.creditCardPaymentLabel = Ti.UI.createLabel(Styles.creditCardPaymentLabel);
	
	this.visaMasterImageView = Ti.UI.createImageView(Styles.visaMasterImageView);
	
	this.fNameText = Ti.UI.createTextField(Styles.fNameText);
	
	this.lNameText = Ti.UI.createTextField(Styles.lNameText);
	
	this.cardType = Ti.UI.createTextField(Styles.cardType);

	this.cardNumber = Ti.UI.createTextField(Styles.cardNumber);
	
	this.cvvExpiryView = Ti.UI.createView(Styles.cvvExpiryView);
	
	this.cvvNumber = Ti.UI.createTextField(Styles.cvvNumber);
	
	this.expiryDate = Ti.UI.createTextField(Styles.expiryDate);
	
	this.makePaymentButton = Ti.UI.createButton(Styles.makePaymentButton);
	
	this.wrapper.add(this.paymentLabel);
	this.creditCardPaymentView.add(this.creditCardPaymentLabel);
	this.creditCardPaymentView.add(this.visaMasterImageView);
	this.wrapper.add(this.creditCardPaymentView);
	this.wrapper.add(this.fNameText);
	this.wrapper.add(this.lNameText);
	this.wrapper.add(this.cardType);
	this.wrapper.add(this.cardNumber);
	this.cvvExpiryView.add(this.cvvNumber);
	this.cvvExpiryView.add(this.expiryDate);
	this.wrapper.add(this.cvvExpiryView);
	this.wrapper.add(this.makePaymentButton);
}

module.exports = MakePayment;
