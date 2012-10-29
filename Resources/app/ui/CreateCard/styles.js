/**
 * Project screen styles
 * @type {Object}
 */
var Styles = {
	wrapper : {
		top : Ti.Platform.osname==='android'?'10.9%':50,
		layout : 'vertical',
		width : Ti.Platform.osname==='android'?'96.87%':310,
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
		width : Ti.Platform.osname==='android'?'90.62%':290,
		height : Ti.Platform.osname==='android'?'50%':180,
		top : 10
	},
	imageOptionView : {
		height : Ti.Platform.osname==='android'?'26.09%':120,
		width : Ti.Platform.osname==='android'?'96.87%':280
	},
	editImageView : {
		left : Ti.Platform.osname==='android'?'16%':30,
		height : Ti.Platform.osname==='android'?'50%':60,
		width : Ti.Platform.osname==='android'?'20%':58,
		backgroundImage : '/app/assets/editImage.png'
	},
	rotateResizeView:{
		height:Ti.Platform.osname==='android'?'83.33%':100,
		width:Ti.Platform.osname==='android'?'95%':290,
		layout:'horizontal',
		backgroundImage : '/app/assets/rotateresize.png'
	},
	editImageLabel : {
		top : Ti.Platform.osname==='android'?'75%':90,
		left : Ti.Platform.osname==='android'?'15%':25,
		text : 'Edit Image'
	},
	changeImageView : {
		left : Ti.Platform.osname==='android'?'65%':125,
		height : Ti.Platform.osname==='android'?'50%':60,
		width : Ti.Platform.osname==='android'?'20%':151,
		backgroundImage : '/app/assets/changeImage.png'
	},
	changeImageLabel : {
		top : Ti.Platform.osname==='android'?'75%':90,
		left : Ti.Platform.osname==='android'?'60%':145,
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
		width : Ti.Platform.osname==='android'?'90.62%':290,
		height : Ti.Platform.osname==='android'?'50%':180,
		top : 10
	},
	messageView : {
		height : Ti.Platform.osname==='android'?'26.09%':120,
		width : Ti.Platform.osname==='android'?'96.87%':280
	},
	addMsgView : {
		left : Ti.Platform.osname==='android'?'15%':45,
		height : Ti.Platform.osname==='android'?'50%':60,
		width : Ti.Platform.osname==='android'?'20%':55,
		backgroundImage : '/app/assets/addMessage.png'
	},
	addMsgLabel : {
		top : Ti.Platform.osname==='android'?'75%':90,
		left : Ti.Platform.osname==='android'?'12%':25,
		text : 'Add Message'
	},
	addAddressView : {
		left : Ti.Platform.osname==='android'?'65%':175,
		//height : Ti.Platform.osname==='android'?'12.17%':56,
		//width : Ti.Platform.osname==='android'?'15.94%':51,
		height : Ti.Platform.osname==='android'?'50%':60,
		width : Ti.Platform.osname==='android'?'20%':151,
		backgroundImage : '/app/assets/addAddress.png'
	},
	addAddressLabel : {
		top : Ti.Platform.osname==='android'?'75%':90,
		left : Ti.Platform.osname==='android'?'62%':155,
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
		height : Ti.Platform.osname==='android'?'6.30%':29,
		width : Ti.Platform.osname==='android'?'32.81%':105,
		backgroundImage:'/app/assets/flippostaddress.png'
	},
	flipText : {
		top : 10,
		font : {
			fontSize : 16
		},
		text : 'Flip Card'
	},
	sendbutton:{
		top : 20,
		width : Ti.Platform.osname==='android'?'68%':220,
		height : 30,
		backgroundColor : 'orange',
		title : 'Send'
	},
	facebookView : {
		top : -350,
		height : '88%',
		width : '100%',
		visible:false,
		backgroundColor:'white'
	}
};

module.exports = Styles;
