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
			this.UI.editImageView.addEventListener('click',function(){
				APP.tabBar.backToNormal();
				APP.tabBar.editImageTab.backgroundImage = '/app/assets/tabEditImageP.png';
				APP.tabBar.selectedTabId = APP.tabBar.editImageTab.id;
				APP.navigationObserver(APP.Constants.CreateCardController, APP.Constants.EditImageView)
			})
			this.UI.changeImageView.addEventListener('click',function(){
				self.UI.selectPicView.visible=true;
			});
			this.UI.facebookButton.addEventListener('click',function(){
				self.UI.selectPicView.visible=false;
				self.UI.facebookView.visible=true;
			});
			this.UI.galleryButton.addEventListener('click',function(){
				self.UI.selectPicView.visible=false;
				Titanium.Media.openPhotoGallery({
		            success : function(event) {
		                self.UI.cardImageView.image = event.media;
						APP.image = event.media;
		            },
		            error : function(error) {
		                alert('Something Bad Happened' + '\n' + 'Please Relaunch The App');
		            }
        		});
			});
			this.UI.takePhotoButton.addEventListener('click',function(){
				self.UI.selectPicView.visible=false;
		        Titanium.Media.showCamera({
		            success : function(event) {
		                self.UI.cardImageView.image = event.media;
						APP.image = event.media;
		            },
		            error : function(error) {
		                alert('Something Bad Happened' + '\n' + 'Please Relaunch The App');
		            },
		            showControls : true,
		            mediaTypes : Ti.Media.MEDIA_TYPE_PHOTO,
		            saveToPhotoGallery : false,
		            autohide : true
		        });
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
