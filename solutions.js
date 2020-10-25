function upperCaser(input){
	input.toUpperCase();
	
}


function repeat(operation, num){
	operation();
    num && --num && repeat(func, num);
}

function doubleall(numbers){
	return numbers.map(x => x * 2);
}

function getShortMessage(messages){
	 return messages
    .filter(function(obj) {
      return obj.message.length <= 50;
    })
    .map(function(obj) {
      return obj.message;
    });
}

function checkUserValid(goodUsers){
	return function allUsersValid(submittedUsers){
		return submittedUsers.every(function(submittedUser) {
		return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id;
      });
    });
  };
}

function reduce(arr,fn,initial){
			  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value 
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) 
  })(0, initial) 
}
	
function duckCount() {
  return Array.prototype.slice.call(arguments).filter(function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}



function countWords(inputWords){
    let solution={}
    for(const word of inputWords){
        if(!solution[word]){
            solution[word]=0
        }
        solution[word]++
    }
    return solution
}

var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].slice.call(arguments))
  }
}

module.exports= function(namespace){
	 console.log.bind(console,namespace)
}

module.exports = function arrayMap(arr, fn){
	arr.reduce(function(acc,item,i){
		acc.push(fn.call(item,i,arr));
		return acc;
	},[]);
} 

module.exports = logger
module.exports =duckCount
module.exports = countWords
module.exports= reduce
module.exports= checkUserValid
module.exports= doubleall
module.exports= upperCaser
module.exports= repeat
module.exports= getShortMessage