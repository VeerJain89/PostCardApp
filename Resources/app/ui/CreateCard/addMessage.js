// Module dependencies
var Styles = require('app/ui/CreateCard/styles');
var APP = require('core');
var Paint = require('ti.paint');

/**
 * Users UI Module
 * @constructor
 */
function AddMessageUI() {"use strict";
	var self = this;
	/**
	 * The main view for this screen
	 * @type {Object}
	 */
	this.wrapper = Ti.UI.createView(Styles.wrapper);
	
	this.messageTextArea = Ti.UI.createTextArea(Styles.messageTextArea);
	
	this.signatureView = Ti.UI.createView(Styles.signatureView);
	
	this.nextButton = Ti.UI.createButton(Styles.nextButton);
	
	this.wrapper.add(this.messageTextArea);
	//this.wrapper.add(this.signatureView);
	
	
	//paint module to sign the message
	this.signatureView = Paint.createPaintView({
		backgroundColor : 'orange',
		width : Ti.Platform.osname==='android'?'100%':290,
		height : Ti.Platform.osname==='android'?'20%':40,
		// strokeWidth (float), strokeColor (string), strokeAlpha (int, 0-255)
	    strokeColor:'white', strokeAlpha:255, strokeWidth:10,
	    eraseMode:false
	});
	//win.add(paintView);
	this.wrapper.add(this.signatureView);
	
	var buttonStrokeWidth = Ti.UI.createButton({ left:10, bottom:10, right:10, height:30, title:'Decrease Stroke Width' });
	buttonStrokeWidth.addEventListener('click', function(e) {
		this.signatureView.strokeWidth = (this.signatureView.strokeWidth === 5) ? 2 : 5;
		e.source.title = (this.signatureView.strokeWidth === 5) ? 'Decrease Stroke Width' : 'Increase Stroke Width';
	});
	this.wrapper.add(buttonStrokeWidth);
	
	/*var buttonStrokeColorRed = Ti.UI.createButton({ bottom:100, left:10, width:75, height:30, title:'Red' });
	buttonStrokeColorRed.addEventListener('click', function() { paintView.strokeColor = 'red'; });
	var buttonStrokeColorGreen = Ti.UI.createButton({ bottom:70, left:10, width:75, height:30, title:'Green' });
	buttonStrokeColorGreen.addEventListener('click', function() { paintView.strokeColor = '#0f0'; });
	var buttonStrokeColorBlue = Ti.UI.createButton({ bottom:40, left:10, width:75, height:30, title:'Blue' });
	buttonStrokeColorBlue.addEventListener('click', function() { paintView.strokeColor = '#0000ff'; });
	win.add(buttonStrokeColorRed);
	win.add(buttonStrokeColorGreen);
	win.add(buttonStrokeColorBlue);*/
	
	var clear = Ti.UI.createButton({ top:10,left:10, width:'24%', height:30, title:'Clear' });
	clear.addEventListener('click', function() { self.signatureView.clear(); });
	this.wrapper.add(clear);
	
	var buttonStrokeAlpha = Ti.UI.createButton({ top:-30,left:'27%', width:'auto', height:30, title:'Alpha : 100%' });
	buttonStrokeAlpha.addEventListener('click', function(e) {
		this.signatureView.strokeAlpha = (this.signatureView.strokeAlpha === 255) ? 127 : 255;
		e.source.title = (this.signatureView.strokeAlpha === 255) ? 'Alpha : 100%' : 'Alpha : 50%';
	});
	this.wrapper.add(buttonStrokeAlpha);
	
	var buttonStrokeColorEraser = Ti.UI.createButton({ top:-30,right:10, width:'auto', height:30, title:'Erase : Off' });
	buttonStrokeColorEraser.addEventListener('click', function(e) {
		this.signatureView.eraseMode = (this.signatureView.eraseMode) ? false : true;
		e.source.title = (this.signatureView.eraseMode) ? 'Erase : On' : 'Erase : Off';
	});
	this.wrapper.add(buttonStrokeColorEraser);
	
	this.wrapper.add(this.nextButton);
	
	}

module.exports = AddMessageUI;

	