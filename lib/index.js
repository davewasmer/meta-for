let metaKey = Symbol('meta');
let EMPTY_META = {};
Object.freeze(EMPTY_META);

export default function metaFor(obj, writable = false) {
  if (obj == null) {
    return;
  }
  if (obj[metaKey]) {
    return obj[metaKey];
  } else if (writable) {
    obj[metaKey] = {};
    return obj[metaKey];
  } else {
    return EMPTY_META;
  }
}
