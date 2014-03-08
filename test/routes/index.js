/*
 * GET home page.
 */

var a = 1;

exports.index = function(req, res) {

	a = a + 1;
	
	//get_http();
	
	res.render('index', {
		title : 'Express' + a
	});
};

var get_http = function() {

	var http = require('http');
	var options = {
		host : 'www.baidu.com',
		path : '/',
		method : 'GET',
		headers : {
			'Accept' : 'text/html'
		}
	};
	var req = http.request(options, function(res) {
		res.setEncoding('utf8');
		res.on('data', function(data) {
			console.log(data);
		});
	});
	req.end();

};
