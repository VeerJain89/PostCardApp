/**
 * Project screen styles
 * @type {Object}
 */
var Styles = {
	wrapper : {
        top:Ti.Platform.osname==='android'?'10.9%':50,
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
		top : Ti.Platform.osname==='android'?'4%':10,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'8%':30,
		hintText:'First Name'
	},
    lNameText:{
		backgroundImage : '/app/assets/textBox.png',
		top : Ti.Platform.osname==='android'?'4%':10,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'8%':30,
		hintText:'Last Name'
	},
    emailText:{
		backgroundImage : '/app/assets/textBox.png',
		top : Ti.Platform.osname==='android'?'4%':10,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'8%':30,
		hintText:'Email Address'
	},
    passwordText:{
		backgroundImage : '/app/assets/textBox.png',
		top : Ti.Platform.osname==='android'?'4%':10,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'8%':30,
		hintText:'Password'
	},
    agreeCheckBoxView:{
		top:Ti.Platform.osname==='android'?'10.9%':110,
		height:Ti.Platform.osname==='android'?'5%':20,
		width:Ti.Platform.osname==='android'?'100%':Ti.UI.SIZE
	},
	
	checkBox:{
	  style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
	  textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
	  value:true,
	  left:0,
	},
    agreeText:{
		left:Ti.Platform.osname==='android'?'15%':25,
		text:'I agree to Terms and Conditions.'
	},
    createAccountButton:{
		top:Ti.Platform.osname==='android'?'5%':20,
		width : Ti.Platform.osname==='android'?'68.75%':220,
		height : Ti.Platform.osname==='android'?'6.52%':30,
		backgroundImage : '/app/assets/button.png',
		title : 'Create Account'
	},
};

module.exports = Styles;
