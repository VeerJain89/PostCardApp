// Module dependencies
var APP = require('core');
var Styles = {

};

/**
 * Users UI Module
 * @constructor
 */
function tabBarUI() {"use strict";
	var self = this;

	this.tabBarView = Ti.UI.createView({
		bottom : 0,
		left : 0,
		width : Ti.UI.FILL,
		height : Ti.Platform.osname==='android'?'10.9%':50,
		layout : 'horizontal',
		zIndex:40
	});

	this.createCardTab = Ti.UI.createView({
		id : 1,
		left : 0,
		height : Ti.UI.FILL,
		width : Ti.Platform.osname==='android'?'25%':80,
		backgroundImage : '/app/assets/tabCreateCardP.png'
	});

	this.editImageTab = Ti.UI.createView({
		id : 2,
		left : 0,
		height : Ti.UI.FILL,
		width : Ti.Platform.osname==='android'?'25%':80,
		backgroundImage : '/app/assets/tabEditImageN.png'
	});

	this.writeMsgTab = Ti.UI.createView({
		id : 3,
		left : 0,
		height : Ti.UI.FILL,
		width : Ti.Platform.osname==='android'?'25%':80,
		backgroundImage : '/app/assets/tabWriteMsgN.png'
	});

	this.previewTab = Ti.UI.createView({
		id : 4,
		left : 0,
		height : Ti.UI.FILL,
		width : Ti.Platform.osname==='android'?'25%':80,
		backgroundImage : '/app/assets/tabPreviewN.png'
	});

	this.selectedTabId = 1;

	this.createCardTab.addEventListener('click', function(e) {
		if (e.source.id != self.selectedTabId) {
			APP.navigationObserver(APP.Constants.CreateCardController,APP.Constants.CreateCardView);
			self.selectedTabId = e.source.id;
			self.backToNormal();
			e.source.backgroundImage = '/app/assets/tabCreateCardP.png';
		}
	});

	this.editImageTab.addEventListener('click', function(e) {
		if (e.source.id != self.selectedTabId) {
			APP.navigationObserver(APP.Constants.CreateCardController,APP.Constants.EditImageView);
			self.selectedTabId = e.source.id;
			self.backToNormal();
			e.source.backgroundImage = '/app/assets/tabEditImageP.png';
		}
	});

	this.writeMsgTab.addEventListener('click', function(e) {
		if (e.source.id != self.selectedTabId) {
			APP.navigationObserver(APP.Constants.CreateCardController,APP.Constants.WriteMsgView);
			self.selectedTabId = e.source.id;
			self.backToNormal();
			e.source.backgroundImage = '/app/assets/tabWriteMsgP.png';
		}
	});

	this.previewTab.addEventListener('click', function(e) {
		if (e.source.id != self.selectedTabId) {
			APP.navigationObserver(APP.Constants.CreateCardController,APP.Constants.PreviewView);
			self.selectedTabId = e.source.id;
			self.backToNormal();
			e.source.backgroundImage = '/app/assets/tabPreviewP.png';
		}
	});

	this.backToNormal = function() {
		this.createCardTab.backgroundImage = '/app/assets/tabCreateCardN.png';
		this.editImageTab.backgroundImage = '/app/assets/tabEditImageN.png';
		this.writeMsgTab.backgroundImage = '/app/assets/tabWriteMsgN.png';
		this.previewTab.backgroundImage = '/app/assets/tabPreviewN.png';
	};

	this.tabBarView.add(this.createCardTab);
	this.tabBarView.add(this.editImageTab);
	this.tabBarView.add(this.writeMsgTab);
	this.tabBarView.add(this.previewTab);

}

module.exports = tabBarUI;
