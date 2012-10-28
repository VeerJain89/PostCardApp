// Module dependencies
var Styles = require('app/ui/CreateCard/styles');
var APP = require('core');
var httpHelper = require('/modules/http');
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
		height:100,
		width:72
	});

	var rotateAngle = 0;
	var scaleNumber = 1;
	
	this.rotateRightView.addEventListener('singletap', function() {
		rotateAngle+=90;
		self.cardImageView.animate(Ti.UI.createAnimation({
			transform : Ti.UI.create2DMatrix({
				rotate : rotateAngle
			}),
			duration:2000
		}));
	}); 

	this.rotateLeftView = Ti.UI.createView({
		height:100,
		width:72
	});
	
	this.rotateLeftView.addEventListener('singletap', function() {
		rotateAngle-=90;
		self.cardImageView.animate(Ti.UI.createAnimation({
			transform : Ti.UI.create2DMatrix({
				rotate : rotateAngle
			}),
			duration:2000
		}));
	}); 
	
	this.zoomInView = Ti.UI.createView({
		height:100,
		width:72
	});
	
	this.zoomInView.addEventListener('singletap', function() {
		scaleNumber= scaleNumber*2;
		self.cardImageView.animate(Ti.UI.createAnimation({
			transform : Ti.UI.create2DMatrix({
				scale : scaleNumber
			}),
			duration:2000
		}));
	}); 
	
	this.zoomOutView = Ti.UI.createView({
		height:100,
		width:72
	});
	
	this.zoomOutView.addEventListener('singletap', function() {
		scaleNumber= scaleNumber/2;
		self.cardImageView.animate(Ti.UI.createAnimation({
			transform : Ti.UI.create2DMatrix({
				scale : scaleNumber
			}),
			duration:2000
		}));
	}); 
	
	this.rotateResizeView.add(this.rotateRightView);
	this.rotateResizeView.add(this.rotateLeftView);
	this.rotateResizeView.add(this.zoomInView);
	this.rotateResizeView.add(this.zoomOutView);
	
	this.imageOptionView.add(this.rotateResizeView);
	
	this.wrapper.add(this.editImageText);
	this.wrapper.add(this.cardImageView);
	this.wrapper.add(this.imageOptionView);
}

module.exports = EditImage;
