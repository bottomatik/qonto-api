const fishingrod = require('fishingrod');
const thrower = require('./thrower.js');

let Config = {
	host:'thirdparty.qonto.eu',
	path:'/v1'
}

let request = function(config){
	for(let k in config){
		Config[k] = config[k]
	}

	if(!Config.slug || !Config.secret){
		throw new Error('slug and secret are required in config');
	}

	return function(method, path, data, headers){
		let params = {
			https:true,
			method: method || 'GET',
			path:Config.path + (path ? path : thrower('path is required to perform a request')),
			host: Config.host,
		};

		if(data){
			params.data = data;
		}

		if(headers){
			params.headers = headers;
		} else {
			params.headers = {};
		}

		params.headers['Authorization'] = `${Config.slug}:${Config.secret}`;

		return fishingrod.fish(params);
	}
};

module.exports = request;