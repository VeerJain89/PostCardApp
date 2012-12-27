/**
 * Login screen styles
 * @type {Object}
 */
var Styles = {
    wrapper : {
        top:'50dp',
        layout : 'vertical',
        width:'310dp',
        backgroundColor:'white',
        bottom:'10dp'
    },
    myAccountLabel:{
		top : '10dp',
		left : '10dp',
		color : 'orange',
		font : {
			fontSize : '24dp'
		},
		text : 'My Account'
	},
    emailLabel:{
		top : '30dp',
		left : '20dp',
		text : 'Email Address'
	},
    emailText:{
		backgroundImage : '/app/assets/textBox.png',
		top : '5dp',
		width : '280dp',
		height : '30dp'
	},
    passwordLabel:{
		top : '5dp',
		left : '20dp',
		text : 'Email Address'
	},
    passwordText:{
		backgroundImage : '/app/assets/textBox.png',
		top : '5dp',
		width : '280dp',
		height : '30dp'
	},
    signInButton:{
		top : '10dp',
		width : '220dp',
		height : '30dp',
		backgroundImage : '/app/assets/button.png',
		title : 'Sign In'
	},
    separator:{
		backgroundImage:'/app/assets/separator.png',
		height:'6dp',
		width:'300dp',
		top:'10dp'
	},
    createNewButton:{
		top : '10dp',
		width : '220dp',
		height : '30dp',
		backgroundImage : '/app/assets/button.png',
		title : 'Create New Account'
	},
};

module.exports = Styles; 