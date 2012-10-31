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
    paymentLabel:{
		top : 10,
		left : 10,
		color : 'orange',
		font : {
			fontSize : 24
		},
		text : 'Payment'
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
    cardType:{
		backgroundImage : '/app/assets/textBox.png',
		top : 10,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'6.52%':30,
		hintText:'Card Type'
	},
    cardNumber:{
		backgroundImage : '/app/assets/textBox.png',
		top : 10,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'6.52%':30,
		hintText:'Card No.'
	},
	cvvNumber:{
		backgroundImage : '/app/assets/textBox.png',
		top : 10,
		width : Ti.Platform.osname==='android'?'40%':120,
		height : Ti.Platform.osname==='android'?'6.52%':30,
		hintText:'CVV No.'
	},
	expiryDate:{
		backgroundImage : '/app/assets/textBox.png',
		top : 10,
		left : Ti.Platform.osname==='android'?'50%':140,
		width : Ti.Platform.osname==='android'?'50%':140,
		height : Ti.Platform.osname==='android'?'6.52%':30,
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
		top:20,
		width : Ti.Platform.osname==='android'?'68.75%':220,
		height : Ti.Platform.osname==='android'?'6.52%':30,
		backgroundImage : '/app/assets/button.png',
		title : 'Make Payment'
	},
	cardImageView : {
		backgroundColor : '#666666',
		width : Ti.Platform.osname==='android'?'90.62%':290,
		height : Ti.Platform.osname==='android'?'50%':180,
		top : 10
	},
	paymentOptionsView : {
		height : Ti.Platform.osname==='android'?'26.09%':120,
		width : Ti.Platform.osname==='android'?'96.87%':280 
	},
	paymentOptionLabel : {
		top : 10,
		left : 10,
		color : 'orange',
		font : {
			fontSize : 24
		},
		text : 'Choose mode of Payment'
	},
	visaMasterImageView : {
		top : 10,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'6.52%':30, 
		backgroundImage : '/app/assets/visamaster.png'
	},
	priceTagLabel : {
		top : 10,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'6.52%':30, 
		text : 'Your Postcard costs'
	},
};

module.exports = Styles;
