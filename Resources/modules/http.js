/**
 * HTTP Request Helper
 */

/**
 * Standard HTTP Request
 * @param {Object} params
 * @description The following are valid options to pass through:
 *  params.timeout	    : int Timeout request
 *  params.type	    : string GET/POST
 *  params.format	    : json, etc.
 *  params.data	    : mixed The data to pass
 *  params.url		    : string The url source to call
 *  params.onerror	    : funtion A function to execute when there is an XHR error
 *  params.success	    : function when successful
 *  params.passthrough : Any passthrough params
 */
exports.request = function(params) {"use strict";
    if (Ti.Network.online) {
        Ti.API.info("XHR: " + params.url);

        // Setup the xhr object
        var i, j, xhr = Ti.Network.createHTTPClient();

        // Set the timeout or a default if one is not provided
        xhr.timeout = (params.timeout !== undefined) ? params.timeout : 10000;

        /**
         * When XHR request is loaded
         */
        xhr.onload = function(data) {
            if (data) {
                data = params.format === "json" ? JSON.parse(this.responseText) : this.responseData;

                if (params.success) {
                    if (params.passthrough) {
                        params.success(data, params.passthrough);
                    } else {
                        params.success(data);
                    }
                } else {
                    return data;
                }
            }
        };

        if (params.ondatastream) {
            xhr.ondatastream = function(event) {
                if (params.ondatastream) {
                    params.ondatastream(event.progress);
                }
            };
        }

        /**
         * Error handling
         * @param {Object} e The callback object
         */
        xhr.onerror = function(event) {
            if (params.failure) {
                params.failure(this);
            } else {  
				params.error(this);       
                Ti.API.error(JSON.stringify(this));
            }
        };

        // Open the remote connection
        params.type = (params.type !== undefined) ? params.type : "GET";
        params.async = (params.async !== undefined) ? params.async : true;

        xhr.open(params.type, params.url, params.async);

        if (params.headers) {
            for ( i = 0, j = params.headers.length; i < j; i += 1) {
                xhr.setRequestHeader(params.headers[i].name, params.headers[i].value);
            }
        }

        if (params.data) {
            // send the data
            xhr.send(JSON.stringify(params.data));
        } else {
            xhr.send();
        }
    } else {
        Ti.API.info("No internet connection");
    }
}; 