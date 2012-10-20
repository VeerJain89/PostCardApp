// Module dependencies
var Styles = require('app/ui/Home/styles');
var APP = require('core');
var httpHelper = require('/modules/http');
/**
 * The main view for this screen
 * wrapper object act as the base view for other controls
 * @type {Object}
 */

function Home() {"use strict";
    var self = this;

    /**
     * Container
     * @type {Object}
     * */
    this.wrapper = Ti.UI.createScrollView(APP.Styles.wrapper);

    /**
     * Header For View
     * @type {Object}
     * */
    this.headerText = Ti.UI.createLabel(Styles.headerText);

    /**
     * Bottom bar
     * @type {Object}
     */
    this.bottomBar = Ti.UI.createView(Styles.bottomBar);

    /**
     *This Function Creates Project DashBoard
     * */
    this.createProjectTable = function(projectCollection, directory) {
        var top, left, rows, cellColor, rowCount, colCount, index, projectCell, projectHeader, projectTitle;

        if (projectCollection.length > 0) {
            top = 150;
            left = 80;
            rows = projectCollection.length <= 3 ? 1 : Math.ceil(projectCollection.length / 3);
            Ti.API.info(projectCollection.length);
            //Cell color will be picked from this collection.
            cellColor = ['#0b0044', '#9acd34', '#ff983f', '#336702', '#2c0a57'];
            for ( rowCount = 0; rowCount < rows; rowCount += 1) {
                for ( colCount = 0; colCount < 3; colCount += 1) {//Only three columns as per the UI
                    index = (rowCount * 3) + colCount;
                    if (index < projectCollection.length) {
                        projectCell = Ti.UI.createView(Styles.projectCellView);
                        //Header for the cell.
                        projectHeader = Ti.UI.createLabel(Styles.projectHeader);

                        //Header for project name.
                        projectTitle = Ti.UI.createLabel(Styles.projectTitle);

                        projectCell.backgroundColor = cellColor[index % cellColor.length];
                        projectCell.top = top;
                        projectCell.left = left;
                        projectCell.directory = directory;
                        projectCell.addEventListener('singletap', self.getLandingPage);

                        projectTitle.text = projectCollection[index].name.toUpperCase();
                        projectCell.projectName = projectCollection[index].name;
                        projectCell.projectURL = projectCollection[index].url;
                        projectCell.add(projectHeader);
                        projectCell.add(projectTitle);
                        self.wrapper.add(projectCell);

                        left = left + 300;
                        index += 1;
                    }
                }
                //Initializing the left after every row.
                left = 80;
                top = top + 170;

            }
            self.wrapper.contentHeight = rows * (150 + 100);
        }
    };

    /**
     *Event listener for project cell
     * */
       this.getLandingPage = function(e) {
      // show the loading view
       APP.loadingView.show();
       APP.topBar.setProjectTitle(e.source.projectName.toUpperCase());
         // save the files if online
        if (APP.currentUserId && Ti.Network.online) {
            self.saveServerProjectFile(e.source.projectName, e.source.projectURL, e.source.directory.name, function(){
                APP.navigationObserver(APP.Constants.HomeController, APP.Constants.ProjectLandingView);                 
            });
                
        } else {

            // if offline mode
            self.readLocalFile(e.source.directory, e.source.projectName);
        }
    };

    this.wrapper.add(this.headerText);
    this.wrapper.add(this.bottomBar);

    /*
     Function to save local files
     * */
    this.readLocalFile = function(directory, projectName) {
        var dir_files, i, fileName = projectName;
        dir_files = directory.getDirectoryListing();
     
        if (dir_files.length > 0) {
            for ( i = 0; i < dir_files.length; i += 1) {
                if (dir_files[i] === fileName) {
                    alert(APP.Constants.NetworkFailure);
                    // set current db on app level
                    APP.currentDB = Titanium.Filesystem.applicationDataDirectory + directory.name + '/' + dir_files[i];
                    // initialize DB
                    Ti.API.info('App.initDB() - being called');
                    APP.initDB();
                    Ti.API.info('App.initDB() - finished');
                }
            }
            APP.navigationObserver(APP.Constants.HomeController, APP.Constants.ProjectLandingView);
            setTimeout(function() {
				APP.loadingView.hide();
			}, 1000);   
        } else {
            alert(APP.Constants.NoLocalFiles);
           setTimeout(function() {
				APP.loadingView.hide();
			}, 1000);           
        }
    };

    /**
     * This function save the project file to application data directory.
     * */
    this.saveServerProjectFile = function(name, remoteUrl, directoryName, callback) {
        var params, path, file, fileName = name;      

        params = {
            url : remoteUrl,
            success : function(data) {            
                path = Titanium.Filesystem.applicationDataDirectory + directoryName;
                file = Titanium.Filesystem.getFile(path, fileName);
                file.write(data);
                // set current db on app level
                APP.currentDB = path + '/' + fileName;
                Ti.API.info('APP.currentDB ' + APP.currentDB);
                // initialize DB
                Ti.API.info('App.initDB() - being called');
                APP.initDB();
                Ti.API.info('App.initDB() - finished');
                callback();
                setTimeout(function() {
					APP.loadingView.hide();
			}, 1000);
            },
            error : function(data) {            	    
                alert(APP.Constants.SaveProjectFileFailue);          
                setTimeout(function() {
					APP.loadingView.hide();
			}, 1000);
            }
        };
        httpHelper.request(params);
    };
}

module.exports = Home;
