// Module dependencies
var Styles = require('app/ui/CreateCard/styles');
var APP = require('core');
var Paint = require('ti.paint');
var httpHelper = require('modules/http');
/**
 * The main view for this screen
 * wrapper object act as the base view for other controls
 * @type {Object}
 */

function EditImage() {"use strict";
    var self = this;

    /**
     * Container
     * @type {Object}
     * */
    this.wrapper = Ti.UI.createScrollView(Styles.wrapper);
    
	this.editImageText = Ti.UI.createLabel(Styles.editImageText);
	
	this.cardImageView = Ti.UI.createImageView(Styles.cardImageView);
	
	if(APP.image){
		this.cardImageView.image = APP.image;
	}
	
	this.imageOptionView = Ti.UI.createView(Styles.imageOptionView);
	
	this.rotateResizeView = Ti.UI.createView(Styles.rotateResizeView);
	
	this.rotateRightView = Ti.UI.createView({
		height:Ti.Platform.osname==='android'?Ti.UI.FILL:100,
		width:Ti.Platform.osname==='android'?'25%':72
	});

	var rotateAngle = 0;
	var scaleNumber = 1;
	
	this.rotateRightView.addEventListener('singletap', function() {
		rotateAngle+=90;
		rotateView();
	}); 

	this.rotateLeftView = Ti.UI.createView({
		height:Ti.Platform.osname==='android'?Ti.UI.FILL:100,
		width:Ti.Platform.osname==='android'?'25%':72
	});
	
	this.rotateLeftView.addEventListener('singletap', function() {
		rotateAngle-=90;
		rotateView();
	}); 
	
	function rotateView(){
		self.cardImageView.animate(Ti.UI.createAnimation({
			transform : Ti.UI.create2DMatrix({
				rotate : rotateAngle
			}),
			duration:500
		}));
	}
	
	this.zoomInView = Ti.UI.createView({
		height:Ti.Platform.osname==='android'?Ti.UI.FILL:100,
		width:Ti.Platform.osname==='android'?'25%':72
	});
	
	this.zoomInView.addEventListener('singletap', function() {
		scaleNumber= scaleNumber*2;
		scaleView();
	}); 
	
	this.zoomOutView = Ti.UI.createView({
		height:Ti.Platform.osname==='android'?Ti.UI.FILL:100,
		width:Ti.Platform.osname==='android'?'25%':72
	});
	
	this.zoomOutView.addEventListener('singletap', function() {
		scaleNumber= scaleNumber/2;
		scaleView();
	}); 
	
	function scaleView(){
		self.cardImageView.animate(Ti.UI.createAnimation({
			transform : Ti.UI.create2DMatrix({
				scale : scaleNumber
			}),
			duration:500
		}));
	}
	
	//****adding paint feature to the selected image******
	{
		
		var paintView = Paint.createPaintView({
		    top:0, right:0, bottom:80, left:0,
		    // strokeWidth (float), strokeColor (string), strokeAlpha (int, 0-255)
		    strokeColor:'#0f0', strokeAlpha:255, strokeWidth:10,
		    eraseMode:false,
		});
		
		//paintView.backgroundImage = this.cardImageView.image;
		
		paintView = this.cardImageView;
		
		var buttonStrokeWidth = Ti.UI.createButton({ left:10, height:30, width:'auto', title:'Decrease Stroke Width' });
		buttonStrokeWidth.addEventListener('click', function(e) {
			paintView.strokeWidth = (paintView.strokeWidth === 10) ? 5 : 10;
			e.source.title = (paintView.strokeWidth === 10) ? 'Decrease Stroke Width' : 'Increase Stroke Width';
		});
		this.wrapper.add(buttonStrokeWidth);
		
		var buttonStrokeColorRed = Ti.UI.createButton({ top:10, left:10, width:'auto', height:30, title:'Red' });
		buttonStrokeColorRed.addEventListener('click', function() { paintView.strokeColor = 'red'; });
		var buttonStrokeColorGreen = Ti.UI.createButton({ top:10, left:10, width:'auto', height:30, title:'Green' });
		buttonStrokeColorGreen.addEventListener('click', function() { paintView.strokeColor = '#0f0'; });
		var buttonStrokeColorBlue = Ti.UI.createButton({ top:10, left:10, width:'auto', height:30, title:'Blue' });
		buttonStrokeColorBlue.addEventListener('click', function() { paintView.strokeColor = '#0000ff'; });
		this.wrapper.add(buttonStrokeColorRed);
		this.wrapper.add(buttonStrokeColorGreen);
		this.wrapper.add(buttonStrokeColorBlue);
		
		var clear = Ti.UI.createButton({ top:10, left:10, width:'auto', height:30, title:'Clear' });
		clear.addEventListener('click', function() { paintView.clear(); });
		this.wrapper.add(clear);
		
		var buttonStrokeAlpha = Ti.UI.createButton({ top:10, left:10, width:'auto', height:30, title:'Alpha : 100%' });
		buttonStrokeAlpha.addEventListener('click', function(e) {
			paintView.strokeAlpha = (paintView.strokeAlpha === 255) ? 127 : 255;
			e.source.title = (paintView.strokeAlpha === 255) ? 'Alpha : 100%' : 'Alpha : 50%';
		});
		this.wrapper.add(buttonStrokeAlpha);
		
		var buttonStrokeColorEraser = Ti.UI.createButton({ top:10, left:10, width:'auto', height:30, title:'Erase : Off' });
		buttonStrokeColorEraser.addEventListener('click', function(e) {
			paintView.eraseMode = (paintView.eraseMode) ? false : true;
			e.source.title = (paintView.eraseMode) ? 'Erase : On' : 'Erase : Off';
		});
		this.wrapper.add(buttonStrokeColorEraser);
	}
	
	
	
	this.rotateResizeView.add(this.rotateRightView);
	this.rotateResizeView.add(this.rotateLeftView);
	this.rotateResizeView.add(this.zoomInView);
	this.rotateResizeView.add(this.zoomOutView);
	
	this.imageOptionView.add(this.rotateResizeView);
	
	this.wrapper.add(this.editImageText);
	this.wrapper.add(this.cardImageView);
	//this.wrapper.add(paintView);
	this.wrapper.add(this.imageOptionView);
}

module.exports = EditImage;
