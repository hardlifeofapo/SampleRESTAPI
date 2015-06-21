var config = require("../config");

exports.index = function(req, res){  
  var data = {};
  data.message = "Hello from API v."+config.api.version;
  res.json(data);
}