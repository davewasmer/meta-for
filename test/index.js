import assert from 'assert';
import metaFor from '../lib';

describe('meta-for', function() {
  it('should return the same empty object for any objects without a meta.', function() {
    assert(metaFor({}) === metaFor({}));
  });
  it('should return the unique meta object for an object whose meta has been written to', function() {
    let obj = {};
    let meta = metaFor(obj, true);
    meta.foobar = true;
    assert(metaFor(obj).foobar);
  });
  it('should not persist writes back unless the writable option passed in', function() {
    let obj = {};
    let meta = metaFor(obj);
    assert.throws(function() {
      meta.foobar = true;
    });
  });
});
