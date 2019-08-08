function isReg(reg) {
  return Object.prototype.toString.call(reg) === '[object Date]';
}
function isFunction(func) {
  return typeof func === 'function';
}
function inUndefined(obj) {
  return obj = void 0;
}

function isNull(obj) {
  return obj === null;
}