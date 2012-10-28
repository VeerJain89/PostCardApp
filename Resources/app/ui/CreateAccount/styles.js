/**
 * Project screen styles
 * @type {Object}
 */
var Styles = {
	wrapper : {
        top:50,
        layout : 'vertical',
        width:Ti.Platform.osname==='android'?'96.87%':310,
        backgroundColor:'white',
        height:Ti.Platform.osname==='android'?'86.96%':400
    },
    createAccountLabel:{
		top : 10,
		left : 10,
		color : 'orange',
		font : {
			fontSize : 24
		},
		text : 'Create Account'
	},
    fNameText:{
		backgroundImage : '/app/assets/textBox.png',
		top : 10,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'6.52%':30,
		hintText:'First Name'
	},
    lNameText:{
		backgroundImage : '/app/assets/textBox.png',
		top : 10,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'6.52%':30,
		hintText:'Last Name'
	},
    emailText:{
		backgroundImage : '/app/assets/textBox.png',
		top : 10,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'6.52%':30,
		hintText:'Email Address'
	},
    passwordText:{
		backgroundImage : '/app/assets/textBox.png',
		top : 10,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'6.52%':30,
		hintText:'Password'
	},
    agreeCheckBoxView:{
		top:110,
		height:Ti.Platform.osname==='android'?'4.35%':20,
		width:Ti.UI.SIZE
	},
    checkBox:{
		backgroundImage:'/app/assets/checkbox.png',
		height:Ti.Platform.osname==='android'?'3.26%':15,
		width:Ti.Platform.osname==='android'?'4.69%':15,
		left:5
	},
    agreeText:{
		left:25,
		text:'I agree to Terms and Conditions.'
	},
    createAccountButton:{
		top:20,
		width : Ti.Platform.osname==='android'?'68.75%':220,
		height : Ti.Platform.osname==='android'?'6.52%':30,
		backgroundImage : '/app/assets/button.png',
		title : 'Create Account'
	},
};

module.exports = Styles;
