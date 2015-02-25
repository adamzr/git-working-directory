/* Tests */
'use strict';
var assert = require('assert');
var gitWorkingDirectory = require('../');

describe('git-working-directory node module', function () {
  it('must find the repoA directory', function (done) {
    function verify(directories){
      assert(directories.length === 1, 'Did not find only one repoA directory.');
      assert(directories[0] === __dirname + "/fakeRepo1", 'Did not find repoA directory.');
      done();
    }
    gitWorkingDirectory("userA", "repoA", verify, __dirname, "fakegit");
  });
  it('must find both repoB directories', function (done) {
    function verify(directories){
      assert(directories.length === 2, 'Did not find both repoB directories.');
      assert(directories[0] === __dirname + "/fakeRepo2", 'Did not find fakeRepo2 directory.');
      assert(directories[1] === __dirname + "/fakeRepo3", 'Did not find fakeRepo3 directory.');

      done();
    }
    gitWorkingDirectory("userB", "repoB", verify, __dirname, "fakegit");
  });
  it('must not find the repoC directory', function (done) {
    function verify(directories){
      assert(directories.length === 0, 'Should not have found a repoC directory.');
      done();
    }
    gitWorkingDirectory("userC", "repoC", verify, __dirname, "fakegit");
  });
});
