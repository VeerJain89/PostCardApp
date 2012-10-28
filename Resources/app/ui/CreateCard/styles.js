/**
 * Project screen styles
 * @type {Object}
 */
var Styles = {
	wrapper : {
		top : 50,
		layout : 'vertical',
		width : Ti.Platform.osname==='android'?'(310/Screen_Width)%':310,
		backgroundColor : 'white'
	},
	createCardLabel : {
		top : 10,
		left : 10,
		color : 'orange',
		font : {
			fontSize : 24
		},
		text : 'Create Card'
	},
	cardImageView : {
		backgroundColor : '#666666',
		width : Ti.Platform.osname==='android'?'(290/Screen_Width)%':290,
		height : Ti.Platform.osname==='android'?'(180/Screen_Height)%':180,
		top : 10
	},
	imageOptionView : {
		height : Ti.Platform.osname==='android'?'(120/Screen_Height)%':120,
		width : Ti.Platform.osname==='android'?'(280/Screen_Width)%':280
	},
	editImageView : {
		left : 30,
		height : Ti.Platform.osname==='android'?'(60/Screen_Height)%':60,
		width : Ti.Platform.osname==='android'?'(58/Screen_Width)%':58,
		backgroundImage : '/app/assets/editImage.png'
	},
	editImageLabel : {
		top : 90,
		left : 25,
		text : 'Edit Image'
	},
	changeImageView : {
		left : 125,
		height : Ti.Platform.osname==='android'?'(60/Screen_Height)%':60,
		width : Ti.Platform.osname==='android'?'(151/Screen_Width)%':151,
		backgroundImage : '/app/assets/changeImage.png'
	},
	changeImageLabel : {
		top : 90,
		left : 145,
		text : 'Change Image'
	},
	writeMsgLabel : {
		top : 10,
		left : 10,
		color : 'orange',
		font : {
			fontSize : 24
		},
		text : 'Write Message'
	},
	postCardView : {
		backgroundImage : '/app/assets/postcard.png',
		width : Ti.Platform.osname==='android'?'(290/Screen_Width)%':290,
		height : Ti.Platform.osname==='android'?'(180/Screen_Height)%':180,
		top : 10
	},
	messageView : {
		height : Ti.Platform.osname==='android'?'(120/Screen_Height)%':120,
		width : Ti.Platform.osname==='android'?'(280/Screen_Width)%':280
	},
	addMsgView : {
		left : 45,
		height : Ti.Platform.osname==='android'?'(60/Screen_Height)%':60,
		width : Ti.Platform.osname==='android'?'(55/Screen_Width)%':55,
		backgroundImage : '/app/assets/addMessage.png'
	},
	addMsgLabel : {
		top : 90,
		left : 20,
		text : 'Add Message'
	},
	addAddressView : {
		left : 175,
		height : Ti.Platform.osname==='android'?'(56/Screen_Height)%':56,
		width : Ti.Platform.osname==='android'?'(51/Screen_Width)%':51,
		backgroundImage : '/app/assets/addAddress.png'
	},
	addAddressLabel : {
		top : 90,
		left : 155,
		text : 'Add Address'
	},
	previewLabel : {
		top : 10,
		left : 10,
		color : 'orange',
		font : {
			fontSize : 24
		},
		text : 'Preview Card'
	},
	editImageText : {
		top : 10,
		left : 10,
		color : 'orange',
		font : {
			fontSize : 24
		},
		text : 'Edit Image'
	},
	flipView : {
		top:20,
		height : Ti.Platform.osname==='android'?'(29/Screen_Height)%':29,
		width : Ti.Platform.osname==='android'?'(105/Screen_Width)%':105,
		backgroundImage:'/app/assets/flippostaddress.png'
	},
	flipText : {
		top : 10,
		font : {
			fontSize : 16
		},
		text : 'Flip Card'
	},
};

module.exports = Styles;
