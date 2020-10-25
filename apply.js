'use strict'



var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].slice.call(arguments))
  }
}


module.exports= logger;