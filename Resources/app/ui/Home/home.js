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
	
	this.headerView = Ti.UI.createView({
		backgroundImage:'app/assets/header.png',
		top:0,
		height:50,
		width:320
	});
	
	this.descriptionImage= Ti.UI.createImageView({
		backgroundImage:'app/assets/descriptionImage.png',
		width:Ti.UI.FILL,
		height:120,
		top:20
	});
	
	this.createCardView = Ti.UI.createView({
		top:10,
		backgroundImage:'app/assets/createCard.png',
		height:50,
		width:260
	});
	
	this.postBoxView = Ti.UI.createView({
		top:10,
		backgroundImage:'app/assets/viewPostBox.png',
		height:50,
		width:260
	});
	
	this.checkAccountView = Ti.UI.createView({
		top:10,
		backgroundImage:'app/assets/checkAccount.png',
		height:50,
		width:260
	});
	
	this.wrapper.add(this.headerView);
	this.wrapper.add(this.descriptionImage);
	this.wrapper.add(this.createCardView);
	this.wrapper.add(this.postBoxView);
	this.wrapper.add(this.checkAccountView);
}

module.exports = Home;
