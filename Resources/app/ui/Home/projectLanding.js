// Module dependencies
var Styles = require('app/ui/Home/landingStyles');
var APP = require('core');
/**
 * Landing UI Module
 * @constructor
 */
function LandingUI() {
	"use strict";
    var self = this;
    /**
     * The main view for this screen
     * @type {Object}
     */
    this.wrapper = Ti.UI.createView(APP.Styles.wrapper);
    this.wrapper.top = 39;
    this.wrapper.layout = 'vertical';

    /**
     * The views for this screen
     * @type {Object}
     */
    this.mergerView = Ti.UI.createView(Styles.mergerView);
    this.mergerView.backgroundImage = 'app/assets/orangeBase.png';
    this.valueDriversView = Ti.UI.createView(Styles.view);
    this.valueDriversView.backgroundImage = 'app/assets/blueBase.png';
    this.howView = Ti.UI.createView(Styles.view);
    this.howView.backgroundImage = 'app/assets/greenBase.png';
    
    //set screen title
    this.mergerView.addEventListener('singletap', function(e) {
        if (e.source.isView) {
            APP.topBar.lblScreenName.text = APP.Constants.Opportunity;
        }
    });

    this.valueDriversView.addEventListener('singletap', function(e) {
        if (e.source.isView) {
            APP.topBar.lblScreenName.text = APP.Constants.ValueDrivers;
        }
    });

    this.howView.addEventListener('singletap', function(e) {
        if (e.source.isView) {
            APP.topBar.lblScreenName.text = APP.Constants.HowWeHelp;
        }
    }); 

    
    /**
     * The tabs for this screen
     * @type {Object}
     */
    this.mergerTab = Ti.UI.createView(Styles.mergerTab);
    this.valueDriversTab = Ti.UI.createScrollView(Styles.tab);
    this.howTab = Ti.UI.createScrollView(Styles.tab);

    /**
     * Label for each tab
     * @type {Object}
     */ 
    this.valueDriversLabel = Ti.UI.createLabel(Styles.label);
    this.howLabel = Ti.UI.createLabel(Styles.label);
    
    //Setting text for each label 
    this.valueDriversLabel.text= APP.Constants.ValueDrivers;//'value drivers';
    this.howLabel.text= APP.Constants.HowWeHelp;// 'how we help';
    
    /**
     * transform for each Label
     * @type {Object}
     */
    
    this.transform = Titanium.UI.create2DMatrix();
    this.transform = this.transform.rotate(-90);

    //transforming the label to vertical
    this.valueDriversLabel.transform=this.transform;
    this.howLabel.transform=this.transform;    
  
    this.valueDriversView.add(this.valueDriversLabel);
    this.howView.add(this.howLabel);
	
	
    this.mergerView.add(this.mergerTab);
    this.valueDriversView.add(this.valueDriversTab);
    this.howView.add(this.howTab);

    this.wrapper.add(this.mergerView);
    this.wrapper.add(this.valueDriversView);
    this.wrapper.add(this.howView);
}

module.exports = LandingUI; 