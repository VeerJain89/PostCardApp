/**
 * Project screen styles
 * @type {Object}
 */
var Styles = {
	wrapper : {
        top:0,
        height:'100%',
        width:'100%',
        backgroundColor:'white'
    },
    fbView:{
    	backgroundImage:'/app/assets/facebook_login.png',
    	height:'56dp',
    	width:'275dp'
    },
    mainView:{
    	top:0,
    	visible:false,
        layout : 'vertical',
        width:'100%',
        backgroundColor:'white'
    },
    headerView:{
		backgroundImage:'/app/assets/header.png',
		top:'0dp',
		height:'50dp',
		width:'320dp'
	},
    descriptionImage:{
		backgroundImage:'/app/assets/descriptionImage.png',
		width:Ti.UI.FILL,
		height:'120dp',
		top:'20dp'
	},
    createCardView:{
		top:'10dp',
		backgroundImage:'/app/assets/createCard.png',
		height:'50dp',
		width:'260dp'
	},
    postBoxView:{
		top:'10dp',
		backgroundImage:'/app/assets/viewPostBox.png',
		height:'50dp',
		width:'260dp'
	},
    checkAccountView:{
		top:'10dp',
		backgroundImage:'/app/assets/checkAccount.png',
		height:'50dp',
		width:'260dp'
	},
};

module.exports = Styles;
