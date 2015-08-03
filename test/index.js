import assert from 'assert';
import metaFor, { getMeta, setMeta } from '../lib';

describe('metaFor', function() {
  it('should return the same empty object for any objects without a meta when readonly is true.', function() {
    assert(metaFor({}, true) === metaFor({}, true));
  });
  it('should return the unique meta object for an object whose meta has been written to', function() {
    let obj = {};
    let meta = metaFor(obj);
    meta.foobar = true;
    assert(metaFor(obj).foobar);
  });
  it('should not allow writes back if the readonly option passed in', function() {
    let obj = {};
    let meta = metaFor(obj, true);
    assert.throws(function() {
      meta.foobar = true;
    });
  });
});

describe('setMeta', function() {
  it('should set a meta property', function() {
    let obj = {};
    let meta = metaFor(obj);
    setMeta(obj, 'foobar', true);
    assert(meta.foobar);
  });
});

describe('getMeta', function() {
  it('should set a meta property', function() {
    let obj = {};
    setMeta(obj, 'foobar', true);
    assert(getMeta(obj, 'foobar'));
  });
});
