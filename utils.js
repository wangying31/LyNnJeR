// call
Function.prototype.myCall = function(context) {
  if(typeof this !== 'function') {
    throw new TypeError('not funciton')
  }
  context = context || window;
  context.fn = this;
  var args = [...arguments].slice(1);
  var result = context.fn(...args);
  delete context.fn;
  return result;
}

// apply
Function.prototype.myApply = function(context) {
  if(typeof this !== 'function') {
    throw new TypeError('not funciton')
  }
  context = context || window;
  context.fn = this;
  var result = null;
  if(arguments[1]) {
    result = context.fn(...arguments);
  }else {
    result = context.fn();
  }
  delete context.fn();
  return result;
}