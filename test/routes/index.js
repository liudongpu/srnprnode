
/*
 * GET home page.
 */

var a=1;

exports.index = function(req, res){
	
	a=a+1;
  res.render('index', { title: 'Express'+a });
};