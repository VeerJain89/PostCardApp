// Module dependencies
var APP = require('core');
var UI = require('app/ui/Payment/modeOfPaymentSelection');
/**
 * Login controller module
 * @constructor
 */
function ModeOfPaymentSelectionController() {
    "use strict";
    var self = this;
    // Obligatory 'this' reference
    /**
     * The UI object for this controller
     * @type {Object}
     */
    this.UI = new UI();
	
	APP.header.backButton.visible=true;
	
	this.UI.confirmButton.addEventListener('click',function(){
		APP.navigationObserver(APP.Constants.MakePaymentController);
	});
}

module.exports = ModeOfPaymentSelectionController;
