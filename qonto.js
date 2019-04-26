let qonto = function(config){
	let request = require('./lib/request')(config);
	let thrower = require('./lib/thrower.js');

	this.slug = config.slug;

	this.request = request;

	this.attachment = function(id){
		return request('GET', `/attachments/${id}`);
	};

	this.labels = function(current_page=0, per_page=100){
		return request('GET', `/labels`, {
			slug: this.slug,
			current_page: current_page,
			per_page: per_page
		})
	}
	
  this.memberships = function(current_page=0, per_page=100){
		return request('GET', `/memberships`, {
			slug: this.slug,
			current_page: current_page,
			per_page: per_page
		})
	}

  this.organization = function(id){
		return request('GET', `/organizations/${id}`);
	};

  this.transactions = function(iban, current_page=0, per_page=100){
		return request('GET', `/transactions`, {
			slug: this.slug,
			iban: iban || (thrower('Iban required')),
			current_page: current_page,
			per_page: per_page
		})
	}
};


module.exports = qonto;
