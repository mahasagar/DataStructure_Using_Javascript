
function reverse(str){
    return str.split('').reduce((rev,char) => char+rev,'');
}


// function reverse(str){
//     return str
//     .split('')
//     .reverse()
//     .join('');
// }



// function reverse(str){
//     let newStr = '';
//     for(var i = str.length-1;i >= 0;i--){
//         newStr = newStr + str[i];
//     }
//     return newStr;
// }

// function reverse(str){
//     let newReverseStr = '';
//     for(let character of str){
//         newReverseStr = character + newReverseStr;
//         // debugger;
//     }
//     return newReverseStr;
// }
// reverse('sagar');

module.exports = reverse;