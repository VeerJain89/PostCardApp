/**
 * Login screen styles
 * @type {Object}
 */
var Styles = {
    wrapper : {
        top:50,
        layout : 'vertical',
        width:310,
        backgroundColor:'white',
        bottom:10
    },
    myAccountLabel:{
		top : 10,
		left : 10,
		color : 'orange',
		font : {
			fontSize : 24
		},
		text : 'My Account'
	},
    emailLabel:{
		top : 30,
		left : 20,
		text : 'Email Address'
	},
    emailText:{
		backgroundImage : 'app/assets/textBox.png',
		top : 5,
		width : 280,
		height : 30
	},
    passwordLabel:{
		top : 5,
		left : 20,
		text : 'Email Address'
	},
    passwordText:{
		backgroundImage : 'app/assets/textBox.png',
		top : 5,
		width : 280,
		height : 30
	},
    signInButton:{
		top : 10,
		width : 220,
		height : 30,
		backgroundImage : 'app/assets/button.png',
		title : 'Sign In'
	},
    separator:{
		backgroundImage:'app/assets/separator.png',
		height:6,
		width:300,
		top:10
	},
    createNewButton:{
		top : 10,
		width : 220,
		height : 30,
		backgroundImage : 'app/assets/button.png',
		title : 'Create New Account'
	},
};

module.exports = Styles; 