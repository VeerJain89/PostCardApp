/**
 * Project screen styles
 * @type {Object}
 */
var Styles = {
	wrapper : {
        top:0,
        layout : 'vertical',
        width:'320dp',
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
