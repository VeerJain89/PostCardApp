/**
 * Project screen styles
 * @type {Object}
 */
var Styles = {
	wrapper : {
        top: Ti.Platform.osname==='android'?'10.9%':50,
        layout : 'vertical',
        width:Ti.Platform.osname==='android'?'96.87%':310,
        backgroundColor:'white'
    },
    paymentLabel:{
		top : 10,
		left : 10,
		color : 'orange',
		font : {
			fontSize : Ti.Platform.osname==='android'?30:24
		},
		text : 'Payment'
	},
    fNameText:{
		backgroundImage : '/app/assets/textBox.png',
		top : Ti.Platform.osname==='android'?'5%':10,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'8%':30,
		hintText:'First Name'
	},
    lNameText:{
		backgroundImage : '/app/assets/textBox.png',
		top : Ti.Platform.osname==='android'?'5%':10,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'8%':30,
		hintText:'Last Name'
	},
    cardType:{
		backgroundImage : '/app/assets/textBox.png',
		top : Ti.Platform.osname==='android'?'5%':10,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'8%':30,
		hintText:'Card Type'
	},
    cardNumber:{
		backgroundImage : '/app/assets/textBox.png',
		top : Ti.Platform.osname==='android'?'5%':10,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'8%':30,
		hintText:'Card No.'
	},
	cvvExpiryView : {
		top : Ti.Platform.osname==='android'?'5%':10,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'8%':40,
	},
	cvvNumber:{
		backgroundImage : '/app/assets/textBox.png',
		left : 0,
		width : Ti.Platform.osname==='android'?'40%':120,
		height : Ti.Platform.osname==='android'?Ti.UI.FILL:30,
		hintText:'CVV No.'
	},
	expiryDate:{
		backgroundImage : '/app/assets/textBox.png',
		//top : 10,
		left : Ti.Platform.osname==='android'?'50%':140,
		width : Ti.Platform.osname==='android'?'50%':140,
		height : Ti.Platform.osname==='android'?Ti.UI.FILL:30,
		hintText:'Expiry Date.'
	},
    confirmButton:{
		top:20,
		width : Ti.Platform.osname==='android'?'68.75%':220,
		height : Ti.Platform.osname==='android'?'6.52%':30,
		backgroundImage : '/app/assets/button.png',
		title : 'Confirm'
	},
	makePaymentButton:{
		top : Ti.Platform.osname==='android'?'8%':20,
		width : Ti.Platform.osname==='android'?'68.75%':220,
		height : Ti.Platform.osname==='android'?'6.52%':30,
		backgroundImage : '/app/assets/button.png',
		title : 'Make Payment'
	},
	cardImageView : {
		backgroundColor : '#666666',
		width : Ti.Platform.osname==='android'?'90.62%':290,
		height : Ti.Platform.osname==='android'?'30%':180,
		top : 10
	},
	paymentOptionsView : {
		top : 10,
		height : Ti.Platform.osname==='android'?'40%':120,
		width : Ti.Platform.osname==='android'?'96.87%':280 
	},
	paymentOptionLabel : {
		top : 10,
		left : 10,
		font : {
			fontSize : 24
		},
		text : 'Choose mode of Payment'
	},
	
	creditCardPaymentView : {
		top : 10,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'10%':50,
	},
	creditCardPaymentLabel : {
		top : 10,
		font : {
			fontSize : Ti.Platform.osname==='android'?22:20
		},
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?Ti.UI.FILL:30, 
		text : 'Credit Card Payment'
	},
	visaMasterImageView : {
		top : 10,
		left : Ti.Platform.osname==='android'?'60%':170,
		width : Ti.Platform.osname==='android'?'40%':117,
		height : Ti.Platform.osname==='android'?Ti.UI.FILL:40, 
		backgroundImage : '/app/assets/visamaster.png'
	},
	cardImageView : {
		backgroundColor : '#666666',
		width : Ti.Platform.osname==='android'?'80%':260,
		height : Ti.Platform.osname==='android'?'30%':150,
		top : 10
	},
	priceTagLabel : {
		top : 10,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'6.52%':30, 
		text : 'Your Postcard costs'
	},
};

module.exports = Styles;
