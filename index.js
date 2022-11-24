const { spy } = require("chai")

function receivesAFunction(callback){
    return callback(spy)
}
function returnsANamedFunction(){
    return function callBack(){

    }
   
}
function returnsAnAnonymousFunction(){

    return function(){
        
    }
}
