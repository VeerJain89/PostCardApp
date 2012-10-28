// Module dependencies
var APP = require('core');
var createCardUI = require('app/ui/CreateCard/createCard');
var EditImageUI =require('app/ui/CreateCard/editImage');
var WriteMsgUI =require('app/ui/CreateCard/writeMsg');
var PreviewUI =require('app/ui/CreateCard/preview');
var httpHelper = require('/modules/http');
var Header = require('modules/Header');
/**
 * Project controller module
 * @constructor
 */
function CreateCardController(displayView) {"use strict";
	var self = this;
	
	switch(displayView){
		case APP.Constants.CreateCardView:
			this.UI = new createCardUI();
			this.UI.changeImageView.addEventListener('click',function(){
				self.UI.facebookView.visible=true;
			});
			break;
		case APP.Constants.EditImageView:
			this.UI = new EditImageUI();
			break;
		case APP.Constants.WriteMsgView:
			this.UI = new WriteMsgUI();
			break;
		case APP.Constants.PreviewView:
			this.UI = new PreviewUI();
			break;
	}
	APP.currentView = displayView;
	if (!APP.header) {
		var HeaderUI = new Header();
		APP.masterWindow.add(HeaderUI.headerView);
		APP.header = HeaderUI;
	}
	APP.header.headerView.visible=true;
	APP.header.signInButton.visible=true;
	APP.header.backButton.visible=false;
	APP.tabBar.tabBarView.visible=true;
}

module.exports = CreateCardController;
