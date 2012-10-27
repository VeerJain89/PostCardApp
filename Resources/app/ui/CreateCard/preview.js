// Module dependencies
var Styles = require('app/ui/CreateCard/styles');
var APP = require('core');
var httpHelper = require('/modules/http');
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
	
	this.postCardView = Ti.UI.createView(Styles.postCardView);
	this.postCardView.backgroundImage='app/assets/postaddress.png';
	
	this.flipView = Ti.UI.createView(Styles.flipView);
	this.flipText = Ti.UI.createLabel(Styles.flipText);
	
	this.wrapper.add(this.previewLabel);
	this.wrapper.add(this.postCardView);
	this.wrapper.add(this.flipView);
	this.wrapper.add(this.flipText);
}

module.exports = Preview;
