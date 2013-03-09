// Module dependencies
var Styles = require('app/ui/Home/styles');
var APP = require('core');
var httpHelper = require('modules/http');
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
    this.wrapper = Ti.UI.createView(Styles.wrapper);
	
	this.fbView = Ti.UI.createView(Styles.fbView);
	
	this.mainView = Ti.UI.createScrollView(Styles.mainView);
	
	this.headerView = Ti.UI.createView(Styles.headerView);
	
	this.descriptionImage= Ti.UI.createImageView(Styles.descriptionImage);
	
	this.createCardView = Ti.UI.createView(Styles.createCardView);
	
	this.postBoxView = Ti.UI.createView(Styles.postBoxView);
	
	this.checkAccountView = Ti.UI.createView(Styles.checkAccountView);
	
	this.wrapper.add(this.fbView);
	this.wrapper.add(this.mainView);
	
	this.mainView.add(this.headerView);
	this.mainView.add(this.descriptionImage);
	this.mainView.add(this.createCardView);
	this.mainView.add(this.postBoxView);
	this.mainView.add(this.checkAccountView);
}

module.exports = Home;
