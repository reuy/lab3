
/*
 * GET home page.
 */

exports.view = function(req, res){
	var value = req.params.userName;
	if (!value){
		value = "world";
	}
  res.render('index', {
  	'name':  value,
  });
};
