let metaKey = Symbol('meta');
let EMPTY_META = {};
Object.freeze(EMPTY_META);

/**
 * Fetch the meta object for the given object. If the readonly flag is true,
 * it allows the function to optimize fetching the meta for objects that don't
 * have any meta properties yet.
 *
 * @method metaFor
 *
 * @param  {Object} obj       - the object to fetch the meta for
 * @param  {Boolean} readonly - will you be only reading from the meta object?
 * if so, allows the function to reduce object allocations for objects without
 * meta properties
 *
 * @return {Object}           - a POJO containing any meta properties defined
 * for the object.
 *
 * @example
 *   let obj = {};
 *   let meta = metaFor(obj);
 *   meta.foobar = true;
 *   meta = metaFor(obj, true);
 *   meta.foobar // true
 */
export default function metaFor(obj, readonly = false) {
  if (obj == null) {
    return;
  }
  if (obj[metaKey]) {
    return obj[metaKey];
  } else if (!readonly) {
    obj[metaKey] = {};
    return obj[metaKey];
  } else {
    return EMPTY_META;
  }
}

/**
 * Get a meta property from an object. Equivalent to:
 *
 *    metaFor(obj, true)[property];
 *
 * @method getMeta
 *
 * @param  {Object} obj      - object to fetch the meta from
 * @param  {String} property - the meta property to fetch
 *
 * @return {*}          the value of the meta property
 */
export function getMeta(obj, property) {
  return metaFor(obj, true)[property];
}

/**
 * Set a meta property on an object. Equivalent to:
 *
 *    metaFor(obj)[property] = value;
 *
 * @method getMeta
 *
 * @param  {Object} obj      - object to fetch the meta from
 * @param  {String} property - the meta property to set
 * @param  {*} value         - the value to set the meta property to
 *
 * @return {*}          the value of the meta property
 */
export function setMeta(obj, property, value) {
  let meta = metaFor(obj);
  meta[property] = value;
  return meta[property];
}
