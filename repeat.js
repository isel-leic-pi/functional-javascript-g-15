'use strict'


function repeat(operation, num){
	operation();
    num && --num && repeat(func, num);
}

module.exports= repeat;