/**
 * Project screen styles
 * @type {Object}
 */
var Styles = {
	wrapper : {
		top : Ti.Platform.osname==='android'?'10.9%':50,
		layout : 'vertical',
		width : Ti.Platform.osname==='android'?'96.87%':310,
		backgroundColor : 'white',
		height : Ti.Platform.osname==='android'?'86.96%':400
	},
	addAddressLabel : {
		top : 10,
		left : 10,
		color : 'orange',
		font : {
			fontSize : 24
		},
		text : 'Add Address'
	},
	fNameText : {
		backgroundImage : 'app/assets/textBox.png',
		top : Ti.Platform.osname==='android'?'3%':7,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'8%':30,
		hintText : 'First Name'
	},
	lNameText : {
		backgroundImage : 'app/assets/textBox.png',
		top : Ti.Platform.osname==='android'?'3%':7,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'8%':30,
		hintText : 'Last Name'
	},
	address1Text : {
		backgroundImage : 'app/assets/textBox.png',
		top : Ti.Platform.osname==='android'?'3%':7,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'8%':30,
		hintText : 'Address Line 1'
	},
	address2Text : {
		backgroundImage : 'app/assets/textBox.png',
		top : Ti.Platform.osname==='android'?'3%':7,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'8%':30,
		hintText : 'Address Line 2'
	},
	address3Text : {
		backgroundImage : 'app/assets/textBox.png',
		top : Ti.Platform.osname==='android'?'3%':7,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'8%':30,
		hintText : 'Address Line 3'
	},
	cityText : {
		backgroundImage : 'app/assets/textBox.png',
		top : Ti.Platform.osname==='android'?'3%':7,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'8%':30,
		hintText : 'City'
	},
	stateText : {
		backgroundImage : 'app/assets/textBox.png',
		top : Ti.Platform.osname==='android'?'3%':7,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'8%':30,
		hintText : 'State'
	},
	zipText : {
		backgroundImage : 'app/assets/textBox.png',
		top : Ti.Platform.osname==='android'?'3%':7,
		width : Ti.Platform.osname==='android'?'87.50%':280,
		height : Ti.Platform.osname==='android'?'8%':30,
		hintText : 'Postal/Zip Code'
	},
	nextButton : {
		top : Ti.Platform.osname==='android'?'4%':10,
		width : Ti.Platform.osname==='android'?'80%':220,
		height : Ti.Platform.osname==='android'?'8%':30,
		backgroundImage : 'app/assets/button.png',
		title : 'Next'
	}
};

module.exports = Styles;
