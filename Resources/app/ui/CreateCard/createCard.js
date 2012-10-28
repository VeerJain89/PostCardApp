// Module dependencies
var Styles = require('app/ui/CreateCard/styles');
var APP = require('core');
var httpHelper = require('/modules/http');
/**
 * The main view for this screen
 * wrapper object act as the base view for other controls
 * @type {Object}
 */

function CreateCard() {"use strict";
	var self = this;

	/**
	 * Container
	 * @type {Object}
	 * */
	this.wrapper = Ti.UI.createScrollView(Styles.wrapper);

	this.createCardLabel = Ti.UI.createLabel(Styles.createCardLabel);

	this.cardImageView = Ti.UI.createImageView(Styles.cardImageView);
	
	if(APP.image){
		this.cardImageView.image = APP.image;
	}
	
	this.imageOptionView = Ti.UI.createView(Styles.imageOptionView);

	this.editImageView = Ti.UI.createView(Styles.editImageView);

	this.editImageLabel = Ti.UI.createLabel(Styles.editImageLabel);

	this.changeImageView = Ti.UI.createView(Styles.changeImageView);

	this.changeImageLabel = Ti.UI.createLabel(Styles.changeImageLabel);

	this.facebookView = Ti.UI.createView(Styles.facebookView);

	this.imageOptionView.add(this.editImageView);
	this.imageOptionView.add(this.editImageLabel);
	this.imageOptionView.add(this.changeImageView);
	this.imageOptionView.add(this.changeImageLabel);

	this.wrapper.add(this.createCardLabel);
	this.wrapper.add(this.cardImageView);
	this.wrapper.add(this.imageOptionView);
	this.wrapper.add(this.facebookView);

	//for facebook
	Titanium.Facebook.appid = "134793934930";
	Titanium.Facebook.permissions = ['publish_stream', 'read_stream', 'user_photos', 'friends_photos'];

	Titanium.Facebook.addEventListener('login', function(e) {
		if (e.success) {
			setupWindow();
			return;
		} else if (e.error || e.cancelled) {
			return;
		}
	});

	var tableview = Ti.UI.createTableView({
		backgroundColor : 'transparent',
		rowBackgroundColor : 'white'
	}), fb_button = Ti.Facebook.createLoginButton();
	
	tableview.addEventListener('click',function(e){
		var image=e.source.image;
		self.cardImageView.image = image;
		APP.image = image;
		self.facebookView.visible=false;
	});
	
	function setupWindow() {
		if (!Titanium.Facebook.loggedIn) {
			self.facebookView.add(fb_button);
		} else {
			self.facebookView.remove(fb_button);
			getAlbumCovers();
			self.facebookView.add(tableview);
		}
	}

	function getAlbumCovers() {
		Ti.API.debug(Titanium.Facebook.accessToken);
		Titanium.Facebook.requestWithGraphPath('me/albums', {
			fields : 'id,name,cover_photo,count,created_time'
		}, 'GET', function(e) {
			if (e.success) {
				Ti.API.debug(e.result);
				if (e.result) {
					var rows = [];
					var data = JSON.parse(e.result).data;
					for (x in data) {
						Ti.API.debug(JSON.stringify(data[x]));
						var path = data[x].id + '/photos';

						Titanium.Facebook.requestWithGraphPath(path, {
							fields : 'picture,id,name'
						}, 'GET', function(images) {
							if (images.success) {
								var imagedata = JSON.parse(images.result).data;
								for (count in imagedata) {
									Ti.API.info(JSON.stringify(imagedata[count].name));
									imagedata[count].picture = imagedata[count].picture.replace('s.jpg','n.jpg');
									var row = Titanium.UI.createTableViewRow({
										width : '100%',
										height : 'auto',
										image : imagedata[count].picture
									});
									var image = Titanium.UI.createImageView({
										image : imagedata[count].picture,
										top : 0,
										left : 0,
										width : 100,
										height : 100,
										touchEnabled : false
									});
									var title = Titanium.UI.createLabel({
										text : (imagedata[count].name || 'Picture'+x+''+count),
										left : 110,
										width : 'auto',
										height : 'auto',
										touchEnabled : false
									});
									row.add(image);
									row.add(title);
									rows.push(row);
								}
								tableview.setData(rows);
							} else {
								alert('error' + images.result);
							}
						});
					}
				}
			} else if (e.cancelled) {
				Ti.API.debug("user cancelled");
			} else {
				Ti.API.debug(e.result);
			}
		});
	}
	setupWindow();
}

module.exports = CreateCard;