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
	
	this.wrapper.add(this.writeMsgLabel);
}

module.exports = WriteMsg;
