/**
 * Global Styles
 * @type {Object}
 */
var GlobalStyles = {
    wrapper : {
        top : 45,
        bottom : 0,
        width : '100%'
    },
    loadingView:{
		top:0,
		width: '100%',
		height:'100%',
		visible: false,
		zIndex: 2000,
		id:'middleView',	
		opacity: '0.8',
		backgroundColor: 'silver'
    },
    loadingLabel:{
		height: Ti.UI.SIZE,
		width: Ti.UI.SIZE,
		text: 'Loading...........',
		color:'#104F7F',
        font : {
            fontFamily : 'Arial',
            fontSize : 35,
            fontWeight : 'bold'
        }
    }
};

module.exports = GlobalStyles;
