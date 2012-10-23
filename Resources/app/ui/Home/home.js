// Module dependencies
var Styles = require('app/ui/Home/styles');
var APP = require('core');
var httpHelper = require('/modules/http');
/**
 * The main view for this screen
 * wrapper object act as the base view for other controls
 * @type {Object}
 */

function Home() {"use strict";
    var self = this;

    /**
     * Container
     * @type {Object}
     * */
    this.wrapper = Ti.UI.createScrollView(Styles.wrapper);
	
	this.headerView = Ti.UI.createView(Styles.headerView);
	
	this.descriptionImage= Ti.UI.createImageView(Styles.descriptionImage);
	
	this.createCardView = Ti.UI.createView(Styles.createCardView);
	
	this.postBoxView = Ti.UI.createView(Styles.postBoxView);
	
	this.checkAccountView = Ti.UI.createView(Styles.checkAccountView);
	
	this.wrapper.add(this.headerView);
	this.wrapper.add(this.descriptionImage);
	this.wrapper.add(this.createCardView);
	this.wrapper.add(this.postBoxView);
	this.wrapper.add(this.checkAccountView);
}

module.exports = Home;
