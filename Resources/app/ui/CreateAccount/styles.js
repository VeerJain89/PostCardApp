/**
 * Project screen styles
 * @type {Object}
 */
var Styles = {
	wrapper : {
        top:50,
        layout : 'vertical',
        width:310,
        backgroundColor:'white',
        height:400
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
		backgroundImage : 'app/assets/textBox.png',
		top : 10,
		width : 280,
		height : 30,
		hintText:'First Name'
	},
    lNameText:{
		backgroundImage : 'app/assets/textBox.png',
		top : 10,
		width : 280,
		height : 30,
		hintText:'Last Name'
	},
    emailText:{
		backgroundImage : 'app/assets/textBox.png',
		top : 10,
		width : 280,
		height : 30,
		hintText:'Email Address'
	},
    passwordText:{
		backgroundImage : 'app/assets/textBox.png',
		top : 10,
		width : 280,
		height : 30,
		hintText:'Password'
	},
    agreeCheckBoxView:{
		top:110,
		height:20,
		width:Ti.UI.SIZE
	},
    checkBox:{
		backgroundImage:'app/assets/checkbox.png',
		height:15,
		width:15,
		left:5
	},
    agreeText:{
		left:25,
		text:'I agree to Terms and Conditions.'
	},
    createAccountButton:{
		top:20,
		width : 220,
		height : 30,
		backgroundImage : 'app/assets/button.png',
		title : 'Create Account'
	},
};

module.exports = Styles;
