'use strict'



function Spy(target, method){
    let obj={'count':0}

    let m = target[method];

    target[method]= function(...args){
        obj.count++;
        return m.apply(target,args);
    }
    return obj
}




module.exports = Spy;