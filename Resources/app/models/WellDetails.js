/**
 * Well details model
 * @constructor
 */
function WellDetailsModel() {"use strict";
	var self = this;
	/**
	 * Get data for well
	 * @param {Function} _callback
	 */
	this.getWellDetails = function(callback) {
		this.wellDetails = [{
			title : '',
			wellParameters : 'TVD~5,300\nMeasured Depth 11,000\nLateral Length~4100',
			observations : 'Caza operating wells have lowest lateral length'
		}, {
			title : 'Hole\nDiameters',
			wellParameters : "Surface 17-12''\nIntermediate-8 3/4",
			observations : "Alternate 3 string designs:\n1-12 1/4'' Int 8 3/4'' Pro\n2- 12 1/4'' Sur 6 1/8 Int & Prod"
		}, {
			title : 'Casing Set\nDepth',
			wellParameters : "Surface 500''\nIntermediate 5,000''\nLinear 5000''(top depth)",
			observations : ''
		}, {
			title : 'Casing\nDiameter',
			wellParameters : "Surface 13 3/8''\nIntermediate 8 3/4''\nLinear 4 1/2",
			observations : "Alternate 3 string designs:\n1-9 5/8'' Int 5 1/2'' Prod\n2- 5 1/2'' Int 4 1/2'' Prod"
		}, {
			title : '',
			wellParameters : "Diameter 2 7/8''\nDepth Set 5,000",
			observations : ''
		}, {
			title : 'Completions\nData',
			wellParameters : "Water (gallons)~Various\nSand(ibs)~1-2 MM\nAcid (gallons) ~ 30,000-50,000",
			observations : ''
		}, {
			title : 'Performance\nIntervals',
			wellParameters : "6,5000'~11,000'",
			observations : ''
		}];

		if (callback) {
			callback(this.wellDetails);
		}
		this.wellDetails = null;
	};

	
}

module.exports = WellDetailsModel;
