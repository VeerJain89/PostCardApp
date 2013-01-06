// Module dependencies
var APP = require('core');
var createCardUI = require('app/ui/CreateCard/createCard');
var EditImageUI =require('app/ui/CreateCard/editImage');
var WriteMsgUI =require('app/ui/CreateCard/writeMsg');
var PreviewUI =require('app/ui/CreateCard/preview');
var httpHelper = require('modules/http');
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
			//to open the addAddressView to enter the address details
			this.UI.addAddressView.addEventListener('click',function(){
				APP.navigationObserver(APP.Constants.AddAddressController,APP.Constants.WriteMsgView);
			});
			this.UI.addMsgView.addEventListener('click',function(){
				APP.navigationObserver(APP.Constants.AddMessageController,APP.Constants.WriteMsgView);
			});
			//if we can access Preview.js->addMapView to change its property touchEnabled to true
			this.UI.addMapView.addEventListener('click',function(){
			//write logic to make touch enabled for preview.js file link for map	
			});
			break;
		case APP.Constants.PreviewView:
			this.UI = new PreviewUI();
			
			this.UI.addMapView.addEventListener('click',function(){
				var win = Ti.UI.createWindow({
					modal : 'true',
					backgroundColor:'white'
				});
				win.add(Ti.Map.createView({
		    	userLocation:true
				}));
		 		win.open();
		 		
		 		var close = Ti.UI.createButton({
		 			title : 'Close Map'
		 		})
		 		win.add(close);
		 		close.addEventListener('click',function(){
		 			win.close();
		 			APP.navigationObserver(APP.Constants.CreateCardController, APP.Constants.PreviewView)
		 		});
			})
			
			this.UI.sendbutton.addEventListener('click', function() {
				APP.tabBar.tabBarView.visible = false;
				APP.header.signInButton.visible = false;
				APP.header.backButton.visible = true;

				var tempFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, './camera_photo.jpg');
				tempFile.write(APP.image);

				var emailDialog = Titanium.UI.createEmailDialog();
				emailDialog.subject = '';
				emailDialog.toRecipients = [''];
				emailDialog.messageBody = 'This was taken at: ';
				emailDialog.addAttachment(tempFile);
				emailDialog.open();

				APP.navigationObserver(APP.Constants.ModeOfPaymentSelectionController);
			});
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
