'use strict'

module.exports = function arrayMap(arr, fn){
	arr.reduce(function(acc,item,i){
		acc.push(fn.call(item,i,arr));
		return acc;
	},[]);
} 