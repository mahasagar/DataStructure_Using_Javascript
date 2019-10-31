// palindrom('sagar') // False
// palindrom('asdfgfdsa')// True

// function reverseStr(str){
//     return str.split('').reduce((rev,char) => char+rev,'');
// }

// function palindrom(str){
//     if(reverseStr(str) === str)
//         return true;
//     else
//         return false;
// }

function palindrom(str){
    return str.split('').every((char,i) =>{
        return char === str[str.length - 1 -i];
    });
}
module.exports = palindrom;