// Module dependencies
var APP = require('core');
var UI = require('app/ui/Home/home');
var GlobalUI = require('app/ui/Global/global');
var ProjectLanding = require('app/ui/Home/projectLanding');
var Model = require('app/models/projectModel');
var httpHelper = require('/modules/http');
var MenuModel = require('app/models/MenuModel');
var MenuControl = require('modules/MenuControl');
var ActivityIndicator = require('modules/ActivityIndicator');
var FlyMenu = require('modules/FlyMenu');
/**
 * Project controller module
 * @constructor
 */
function HomeController(displayView) {
    "use strict";
	var self = this;

	this.UI = null;

	/**
	 * This function get the project data from cloud.
	 * */
	this.getProjectData = function() {

		// declare variables
		var project, projectCollection = [], directoryName = Ti.App.Properties.getString("localDirectory"), directory = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, directoryName), url, key, params, count;

		Ti.API.info('directoryName ' + directoryName);
		if (!directory.exists()) {
			directory.createDirectory();
		}
        
       // fetch data from cloud if successful login and online and read from local if login failure or if offline
		if (APP.currentUserId && Ti.Network.online) {		
			key= Ti.App.Properties.getString("acs-api-key-production"); // while on development, use key 'acs-api-key-development'
			url = 'https://api.cloud.appcelerator.com/v1/files/query.json?key=' + key + '&where={"user_id":"' + APP.currentUserId + '"}';
			Ti.API.info(url);		
			params = {
				url : url,
				success : function(data) {					
					var dataLength = data.response.files.length;
					// if no file is present on server
					if(dataLength === 0){
						alert(APP.Constants.NoServerFiles);
						 setTimeout(function() {
                        APP.loadingView.hide();
                   	 }, 1000);
						return;
					}
					
					for ( count = 0; count < dataLength; count += 1) {
						var fileData = data.response.files[count];						
						project = new Model();
						project.id = fileData.id;
						project.name = fileData.name;
						project.url = fileData.url;
						projectCollection.push(project);

					}
					//Creating the project dashboard
					self.UI.createProjectTable(projectCollection, directory);					
                    setTimeout(function() {
                        APP.loadingView.hide();
                    }, 1000);			
				},
				error : function(data) {
					// populate message 
					alert(APP.Constants.GetFileFailure);
					 setTimeout(function() {
                        APP.loadingView.hide();
                    }, 1000);					
				},
				format : 'json'
			};
			httpHelper.request(params);
		} else {
			Ti.API.info('********** Offline mode ******');
			// read local files
			projectCollection = self.readLocalFiles(directory);
			//Creating the project dashboard
			self.UI.createProjectTable(projectCollection, directory);
			 setTimeout(function() {
                        APP.loadingView.hide();
                    }, 1000);
		}
	};

	/*
	 Function to read local files
	 * */
	this.readLocalFiles = function(directory) {
		var i, project, projectCollection = [], dir_files = directory.getDirectoryListing();
		
		// retrieve files locally
		if (dir_files.length > 0) {
			for ( i = 0; i < dir_files.length; i += 1) {
				project = new Model();
				project.name = dir_files[i];
				projectCollection.push(project);
			}		
		} 
		// if no local file is present, show the message
		if (dir_files.length === 0) {
			alert(APP.Constants.NoLocalFiles);
			setTimeout(function() {
				APP.loadingView.hide();
			}, 1000);
		}
		
		return projectCollection;
		
	};

	// render Ui based on the view required
	switch(displayView) {
		case APP.Constants.ProjectLandingView:
			/**
			 * The UI object for project landing
			 * @type {Object}
			 */
			this.UI = new ProjectLanding();
			this.menuModel = new MenuModel();
			this.menuControl = new MenuControl();

			this.menuModel.getMergerData(this.UI.mergerTab, this.menuControl.buildMenu, true);
			this.menuModel.getValueDriversData(this.UI.valueDriversTab, this.menuControl.buildMenu, true);
			this.menuModel.getHowData(this.UI.howTab, this.menuControl.buildMenu, true);
			break;
		case APP.Constants.HomeView:
			/**
			 * The UI object for this controller
			 * @type {Object}
			 */

			this.UI = new UI();
            APP.loadingView.show();

			// add project data
			this.getProjectData();
			/**
			 * The Global UI object for this controller
			 * @type {Object}
			 */
			if (!APP.topBar) {
				this.GlobalUI = new GlobalUI();
				this.flyMenuUI = new FlyMenu(['switch projects', 'log out']);
				this.GlobalUI.settingsView.addEventListener('singletap', function() {
					self.flyMenuUI.show();
				});
				APP.masterWindow.add(this.flyMenuUI.flyMenuView);
				APP.masterWindow.add(this.GlobalUI.topBar);
				APP.topBar = this.GlobalUI;
				APP.settingsMenu= this.flyMenuUI;
			}
			else
			{
				APP.topBar.resetProjectTitle();
			}

			break;

	}

}

module.exports = HomeController;
