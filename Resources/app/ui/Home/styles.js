/**
 * Project screen styles
 * @type {Object}
 */
var Styles = {
	wrapper : {
        top:0,
        layout : 'vertical',
        width:Ti.Platform.osname==='android'?'100%':320,
        backgroundColor:'white'
    },
    headerView:{
		backgroundImage:'/app/assets/header.png',
		top:0,
		height:Ti.Platform.osname==='android'?'14%':50,
		width:Ti.Platform.osname==='android'?'100%':320
	},
    descriptionImage:{
		backgroundImage:'/app/assets/descriptionImage.png',
		width:Ti.UI.FILL,
		height:Ti.Platform.osname==='android'?'33%':120,
		top:Ti.Platform.osname==='android'?'(20/Screen_Height)%':20
	},
    createCardView:{
		top:Ti.Platform.osname==='android'?'3%':10,
		backgroundImage:'/app/assets/createCard.png',
		height:Ti.Platform.osname==='android'?'14%':50,
		width:Ti.Platform.osname==='android'?'81%':260
	},
    postBoxView:{
		top:Ti.Platform.osname==='android'?'3%':10,
		backgroundImage:'/app/assets/viewPostBox.png',
		height:Ti.Platform.osname==='android'?'14%':50,
		width:Ti.Platform.osname==='android'?'81%':260
	},
    checkAccountView:{
		top:Ti.Platform.osname==='android'?'3%':10,
		backgroundImage:'/app/assets/checkAccount.png',
		height:Ti.Platform.osname==='android'?'14%':50,
		width:Ti.Platform.osname==='android'?'81%':260
	},
};

module.exports = Styles;
