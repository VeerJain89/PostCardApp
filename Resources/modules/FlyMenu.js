var APP = require('core');
/**
 * RightFlyMenu UI Module
 * @constructor
 */
function FlyMenu(menuText) {"use strict";
	var self = this, i, row, label,rowSeprator;

	// Styles for this menu
	this.MenuStyle = {
		flyMenu : {
			right : 5,
			top : -75,
			width : 177,
			height : 115,
			backgroundImage : '/app/assets/settingsDropDown.png',
			zIndex : 105
		},
		menuTable : {
			top : 15,
			scrollable : false,
			backgroundColor : 'transparent', //'#f0f0f0',
			separatorColor : '#808080',
			separatorStyle : Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
			touchEnabled : false
		},
		flyMenuLabel : {
			left : 15,
			textAlign : 'left',
			color : '#666666',
			font : {
				fontSize : 18,
				fontFamily : 'Arial'
			},
			height : Ti.UI.FILL,
			width : Ti.UI.FILL,
			touchEnabled : false
		},
		rowSeprator : {
			width : '90%',
			height : 1,
			backgroundColor : '#666666',
			bottom : 0,
			left : '5%'
		}
	};

	/**
	 * The Fly Menu view for this screen
	 * @type {Object}
	 */
	this.flyMenuView = Ti.UI.createView(this.MenuStyle.flyMenu);
	/**
	 * The Fly menu table for this screen
	 * @type {Object}
	 */
	this.menuTable = Ti.UI.createTableView(this.MenuStyle.menuTable);

	/**
	 *Row click handler
	 * */
	this.rowClickHandler = function(e) {
        APP.isFiltered = null;
        APP.filteredPortfolioData = null;
	    APP.defaultPortfolioData = null;
	    APP.isCapexSliderSet = false;
		//Removing previous bottom bar
		if (APP.bottomBar !== null) {
			APP.masterWindow.remove(APP.bottomBar);
			APP.bottomBar = null;
		}
		self.show();
		if (e.row.index === 0) {
			APP.navigationObserver(APP.Constants.HomeController, APP.Constants.HomeView);
		} else {
			if (APP.topBar) {
				APP.masterWindow.remove(APP.topBar.topBar);
				APP.masterWindow.remove(APP.settingsMenu.flyMenuView);
				APP.topBar = null;
				APP.settingsMenu = null;
			}
			APP.navigationObserver(APP.Constants.LoginController);
		}

	};

	/**
	 * Data to populate in right fly menu
	 * @type {String Array}
	 */
	this.rowCollection = [];
	
	rowSeprator = Ti.UI.createView(this.MenuStyle.rowSeprator);

	for ( i = 0; i < menuText.length; i += 1) {
		row = Ti.UI.createTableViewRow({
			menuItem : true,
			index : i,
			backgroundColor : 'transparent',
			height : 50
		});
		row.value = menuText[i];

		label = Ti.UI.createLabel(this.MenuStyle.flyMenuLabel);
		label.text = menuText[i];
		row.addEventListener('click', this.rowClickHandler);

		if (i === 0) {
			row.add(rowSeprator);
		}

		row.add(label);
		this.rowCollection.push(row);
	}

	//Setting the data to menu
	this.menuTable.data = this.rowCollection;

	this.isOpen = false;

	this.show = function() {
		if (self.isOpen) {
			self.setAnimation(-75, false);

		} else {
			self.setAnimation(45, true);
		}
	};

	/**
	 * Animation for menu
	 */
	this.setAnimation = function(rightValue, isTouchable) {
		self.isOpen = isTouchable;
		var animateObj = Ti.UI.createAnimation({
			top : rightValue,
			duration : 400
		});
		self.flyMenuView.animate(animateObj);
		self.menuTable.touchEnabled = isTouchable;
	};

	this.flyMenuView.add(this.menuTable);

}

module.exports = FlyMenu;
