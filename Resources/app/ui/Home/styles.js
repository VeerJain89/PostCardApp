/**
 * Project screen styles
 * @type {Object}
 */
var Styles = {
	wrapper : {
        top:0,
        layout : 'vertical',
        width:320,
        backgroundColor:'white'
    },
    headerView:{
		backgroundImage:'app/assets/header.png',
		top:0,
		height:50,
		width:320
	},
    descriptionImage:{
		backgroundImage:'app/assets/descriptionImage.png',
		width:Ti.UI.FILL,
		height:120,
		top:20
	},
    createCardView:{
		top:10,
		backgroundImage:'app/assets/createCard.png',
		height:50,
		width:260
	},
    postBoxView:{
		top:10,
		backgroundImage:'app/assets/viewPostBox.png',
		height:50,
		width:260
	},
    checkAccountView:{
		top:10,
		backgroundImage:'app/assets/checkAccount.png',
		height:50,
		width:260
	},
};

module.exports = Styles;
