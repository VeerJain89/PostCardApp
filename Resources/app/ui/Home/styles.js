/**
 * Project screen styles
 * @type {Object}
 */
var Styles = {
	headerText : {
		top : 80,
		left : 80,
		text : 'SELECT A PROJECT TO GET STARTED',
		font : {
			fontSize : 30
		},
		color : '#717171'
	},
	projectCellView : {
		width : 260,
		height : 130,
		borderRadius : 10		
	},
	projectHeader : {
		text : 'PROJECT',
		font : {
			fontSize : 25
		},
		color : '#FFFFFF',
		top : 20,
		left : 40,
        touchEnabled:false
	},
	projectTitle : {
		text : 'ABC',
		font : {
			fontSize : 30,
			fontWeight : 'bold'
		},
		color : '#FFFFFF',
		top : 50,
		left : 40,
		touchEnabled:false
	},
	bottomBar : {
		width : '100%',
		backgroundColor : 'black',
		bottom : 0,
		height : 40,
		backgroundGradient : {
			type : 'linear',
			colors : ['#000001', '#666666'],
			startPoint : {
				x : 0,
				y : 0
			},
			endPoint : {
				x : 550,
				y : 550
			},
			backFillStart : false
		}
	}
};

module.exports = Styles;
