// Module dependencies
var APP = require('core');
var UI = require('app/ui/Payment/makePayment');
//var UI = require('app/ui/Payment/modeOfPayment');
/**
 * Login controller module
 * @constructor
 */
function MakePaymentController() {
    "use strict";
    var self = this;
    // Obligatory 'this' reference
    /**
     * The UI object for this controller
     * @type {Object}
     */
    this.UI = new UI();
	
	APP.header.signInButton.visible=false;
	APP.header.backButton.visible=true;
	APP.tabBar.tabBarView.visible=false;
	
	this.UI.makePaymentButton.addEventListener('click',function(){
		
	});
}

module.exports = MakePaymentController;
