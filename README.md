# meta-for [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Get and set your own un-collidable meta properties on objects. Powered by Symbols.


## Install

```sh
$ npm install --save meta-for
```


## Usage

```js
import metaFor from 'meta-for';

let obj = {};
let meta = metaFor(obj); // meta is writable
meta.someMetaProperty = true;
let meta = metaFor(obj, true); // meta is read-only
meta.someMetaProperty === true

for (var prop in obj) {
  // The meta property won't appear here!
  // It's also impossible to collide with another property,
  // thanks to the magic of Symbols
}
```


[npm-image]: https://badge.fury.io/js/meta-for.svg
[npm-url]: https://npmjs.org/package/meta-for
[travis-image]: https://travis-ci.org/davewasmer/meta-for.svg?branch=master
[travis-url]: https://travis-ci.org/davewasmer/meta-for
[daviddm-image]: https://david-dm.org/davewasmer/meta-for.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/davewasmer/meta-for
[coveralls-image]: https://coveralls.io/repos/davewasmer/meta-for/badge.svg
[coveralls-url]: https://coveralls.io/r/davewasmer/meta-for
