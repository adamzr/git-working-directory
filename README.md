#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Find the working directories of a git repository on a local machine.


## Install

```sh
$ npm install --save git-working-directory
```


## Usage

```js
var git-working-directory = require('git-working-directory');

git-working-directory('adamzr', 'git-working-directory', function(workingCopies){
  console.log(workingCopies);// Will print an array of absolute file paths to working copies of a given git repository
});
```
We search all sub-directories of your home directory looking for all git repositories, then we check the remote origin URL in each one to check if it is a working copy of the repository you are looking for. `workingCopies` will be an empty array if no working copies are found. This function can take a while to complete if you have a large home directory.

## License

MIT © [Adam Richeimer](adamricheimer.com)


[npm-url]: https://npmjs.org/package/git-working-directory
[npm-image]: https://badge.fury.io/js/git-working-directory.svg
[travis-url]: https://travis-ci.org/adamzr/git-working-directory
[travis-image]: https://travis-ci.org/adamzr/git-working-directory.svg?branch=master
[daviddm-url]: https://david-dm.org/adamzr/git-working-directory.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/adamzr/git-working-directory
