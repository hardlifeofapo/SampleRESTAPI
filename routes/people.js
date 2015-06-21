var fs = require("fs");


exports.list = function(req, res){
  var file = fs.readFileSync('./data/people.json');
  var data = JSON.parse(file);
  res.json(data);
}

exports.get = function(req, res){
  var id = req.params.id;
  var file = fs.readFileSync('./data/people.json');
  var data = JSON.parse(file);
  
  if(!data[id]){
    var data = {};
    data.code = 404;
    data.message = "Person ID "+id+" not found";
    res.status(404).json(data);
  }else{
    res.json(data[id]);
  }
}

exports.create = function(req, res){
  console.log(req.body);
  var data = {};
  data.code = "888";
  data.message = "Not implemented";
  res.json(data);
}

exports.update = function(req, res){
  console.log(req.body['name']);
  var data = {};
  data.code = "888";
  data.message = "Not implemented";
  res.json(data);
}

exports.delete = function(req, res){
  var data = {};
  data.code = "888";
  data.message = "Not implemented";
  res.json(data);
}