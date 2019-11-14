// [0 1 1 2 3 5 8 13 21 34]
//fib(4) // 3

function memoize(fn){
    const cache ={};
    return function(...args){
        if(cache[args]){
            return cache[args];
        }
        const result = fn.apply(this,args);
        cache[args] = result;
        return result;
    }
}
function slowFib(num){
    if(num < 2){
        return num;
    }
    return fib(num -1) + fib(num - 2);

}
const fib = memoize(slowFib);


// function fib(num,key={}){
//     if(num < 2){
//         return num;
//     }
//     if(key[num]){
//         return key[num];
//     }
//     let cal = fib(num -1,key) + fib(num - 2,key);
//     key[num] = cal;
//     return cal;
// }


// function fib(num){
//     let result = [0,1];
//     for(let i = 2;i <= num;i++){
//         const a = result[i -1];
//         const b = result[i -2];
//         result.push(a+b);
//     }
//     return result[num];
// }

module.exports = fib;