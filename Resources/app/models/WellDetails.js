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
		this.wellDetails = [];

		if (callback) {
			callback(this.wellDetails);
		}
		this.wellDetails = null;
	};

	
}

module.exports = WellDetailsModel;
