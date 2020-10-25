'use strict'

function repeat(operation, num) {
  return function() {
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }
}

function trampoline(fn) {
	while(fn instanceof function){
		fn=fn()
	}
}


function trampfunc(operation, num){
 trampoline(function() {
    return repeat(operation, num)
  })
}



module.exports = trampfunc;