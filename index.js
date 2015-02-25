'use strict';
var osenv = require('osenv');
var glob = require("glob");
var fs = require('fs');
var ini = require('ini');
var path = require('path');
require('String.prototype.endsWith');

module.exports = function (user, repository, callback) {
  var homeDirectory = osenv.home();
  var hiddenFolder = ".git";

  // Unit test overrides
  if(arguments.length === 5){
    homeDirectory = arguments[3];
    hiddenFolder = arguments[4];
  }

  var workingCopies = [];
  glob(homeDirectory + "/**/" + hiddenFolder + "/config", function(er, files) {
    for (var i = 0; i < files.length; i++) {
      var config = ini.parse(fs.readFileSync(files[i], 'utf-8'));
      if (config && config['remote "origin"'] && config['remote "origin"'].url && config['remote "origin"'].url.endsWith(user + "/" + repository + ".git")) {
        workingCopies.push(path.join(files[i], "../.."));
      }
    }
    callback(workingCopies);
  });
};
