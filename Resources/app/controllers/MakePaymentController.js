// Module dependencies
var APP = require('/core');
var UI = require('/app/ui/Payment/makePayment');
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
	
	
	
}

module.exports = MakePaymentController;
