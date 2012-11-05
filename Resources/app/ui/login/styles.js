/**
 * Login screen styles
 * @type {Object}
 */
var Styles = {
    wrapper : {
        top:Ti.Platform.osname==='android'?'11%':50,
        layout : 'vertical',
        width:Ti.Platform.osname==='android'?'96%':310,
        backgroundColor:'white',
        bottom:10
    },
    myAccountLabel:{
		top : Ti.Platform.osname==='android'?'2.5%':10,
		left : 10,
		color : 'orange',
		font : {
			fontSize : 24
		},
		text : 'My Account'
	},
    emailLabel:{
		top : Ti.Platform.osname==='android'?'7.3%':30,
		left : 20,
		text : 'Email Address'
	},
    emailText:{
		backgroundImage : '/app/assets/textBox.png',
		top : Ti.Platform.osname==='android'?'2%':5,
		width : Ti.Platform.osname==='android'?'87%':280,
		height : 30
	},
    passwordLabel:{
		top : Ti.Platform.osname==='android'?'2%':5,
		left : 20,
		text : 'Email Address'
	},
    passwordText:{
		backgroundImage : '/app/assets/textBox.png',
		top : Ti.Platform.osname==='android'?'2%':5,
		width : Ti.Platform.osname==='android'?'87%':280,
		height : 30
	},
    signInButton:{
		top : Ti.Platform.osname==='android'?'4%':10,
		width : Ti.Platform.osname==='android'?'68%':220,
		height : 30,
		backgroundImage : '/app/assets/button.png',
		title : 'Sign In'
	},
    separator:{
		backgroundImage:'/app/assets/separator.png',
		height:6,
		width:Ti.Platform.osname==='android'?'93%':300,
		top:Ti.Platform.osname==='android'?'4%':10
	},
    createNewButton:{
		top : Ti.Platform.osname==='android'?'4%':10,
		width : Ti.Platform.osname==='android'?'68%':220,
		height : 30,
		backgroundImage : '/app/assets/button.png',
		title : 'Create New Account'
	},
};

module.exports = Styles; 