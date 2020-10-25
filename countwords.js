'use strict'




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

module.exports= countWords;