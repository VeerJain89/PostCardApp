// Module dependencies
var Styles = {
	
};

/**
 * Users UI Module
 * @constructor
 */
function HeaderUI() {
    "use strict";
	var self = this;
	
	this.headerView = Ti.UI.createView({
		top:0,
		left:0,
		width:320,
		height:50,
		backgroundImage:'app/assets/header.png'
	});
}

module.exports = HeaderUI; 