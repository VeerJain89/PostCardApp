// Module dependencies
var Styles = require('app/ui/CreateCard/styles');
var APP = require('core');
var httpHelper = require('/modules/http');
/**
 * The main view for this screen
 * wrapper object act as the base view for other controls
 * @type {Object}
 */

function EditImage() {"use strict";
    var self = this;

    /**
     * Container
     * @type {Object}
     * */
    this.wrapper = Ti.UI.createScrollView(Styles.wrapper);
    
	this.editImageLabel = Ti.UI.createLabel(Styles.editImageLabel);
	
	this.wrapper.add(this.editImageLabel);
}

module.exports = EditImage;
