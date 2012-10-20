function DropDown() {"use strict";
	var self = this;

	this.rowArray = [];
	this.height = 0;
	this.rowHeight = 0;
	this.rowFont = {};
	this.rowPadding = 0;
	this.parentView = null;
	this.rowClickHandler = null;

	this.createDropDown = function(dictionary) {
		var i;
		self.height = dictionary.height;
		self.rowHeight = dictionary.rowHeight;
		self.rowFont = dictionary.rowFont;
		self.rowPadding = dictionary.rowPadding;
		
		//Main View For DropDown
		self.parentView = Ti.UI.createView({
			top : dictionary.top,
			left : dictionary.left,
			bottom : dictionary.bottom,
			right : dictionary.right,
			height : dictionary.height,
			width : dictionary.width,
			backgroundColor : 'transparent',
			zIndex : dictionary.zIndex
		});

		//Initial Drop Button
		this.dropButton = Titanium.UI.createView(dictionary.dropButton);

		//Text Field For DropDown
		this.dropdown = Titanium.UI.createTextField({
			top : 0,
			left : 0,
			bottom : dictionary.bottom,
			right : dictionary.right,
			width : dictionary.width,
			height : dictionary.height,
			value : dictionary.selectText,
			index : -1,
			borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			rightButtonMode : Titanium.UI.INPUT_BUTTONMODE_ALWAYS,
			font : dictionary.headerFont,
			color : dictionary.headerFont.textColor
		});

		this.dropdown.setRightButton(this.dropButton);
        
        this.buttonTopView = Ti.UI.createView({
            top:0,
            left:0
        });
        
		//View For DropDown Items
		this.ddlTableView = Ti.UI.createTableView({
			top : 0,
			left : 0,
			width : dictionary.width,
			separatorColor : dictionary.sepratorColor,
			borderRadius : dictionary.borderRadius,
			borderColor : dictionary.menuBorderColor,
			visible : false
		});

		//Header Row
		this.headerRow = Ti.UI.createTableViewRow({
			height : dictionary.rowHeight,
			selectedValue : -1,
			selectedText : dictionary.selectText
		});

		//Down Arrow
		this.rowArrow = Ti.UI.createImageView(dictionary.downArrow);

		this.headerRowText = Ti.UI.createLabel({
			left : dictionary.rowPadding,
			text : dictionary.selectText,
			font : dictionary.headerFont,
			color : dictionary.headerFont.textColor
		});

		this.headerRow.add(this.headerRowText);
		this.headerRow.add(this.rowArrow);
		this.rowArray.push(this.headerRow);
		//this.rowArray = rowArray;
		
		this.headerRow.addEventListener('click', self.setValue);

	};

	this.setData = function(data) {
		var i, row, rowText, height = self.rowHeight;
		for ( i = 0; i < data.length; i += 1) {
			//Created a row for matched item
			row = Ti.UI.createTableViewRow({
				selectedValue : i,
				selectedText : data[i],
				height : self.rowHeight,
				color : self.rowFont.textColor
			});

			rowText = Ti.UI.createLabel({
				left : self.rowPadding,
				color : self.rowFont.textColor,
				font : self.rowFont
			});

			rowText.text = data[i];
			row.add(rowText);
			self.rowArray.push(row);
			row.addEventListener('click', self.setValue);

			height += self.rowHeight;
		}
		self.ddlTableView.height = height;

		self.parentView.add(self.dropdown);
		self.parentView.add(self.buttonTopView);
		self.parentView.add(self.ddlTableView);
        
		self.buttonTopView.addEventListener('singletap', function() {
			self.ddlTableView.data = self.rowArray;
			self.ddlTableView.visible = true;
			//Setting the height of the container to the height of table view other wise row click event does not work
			self.parentView.height = height;
		});
	};

	//This set the selected value
	this.setValue = function(e) {
		self.dropdown.value = e.row.selectedText;
		self.dropdown.index = e.row.selectedValue;
		self.ddlTableView.visible = false;
		self.parentView.height = self.height;
		
		//Any additional things will be sent as a function where the dropdown is created.
		if (self.rowClickHandler) {
			self.rowClickHandler(e);
		}

	};

}

module.exports = DropDown;

