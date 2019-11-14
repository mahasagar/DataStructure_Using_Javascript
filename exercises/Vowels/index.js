function vowel(str){
   const matches =  str.match(/[aeiou]/gi) // g: check all // i : cases handled
   return matches ? matches.length : 0
}


// function vowel(str){
//     let count = 0;
//     const checker = ['a','e','i','o','u'];
//     for(let char of str.toLowerCase()){
//         if(checker.includes(char)){
//             count++;
//         }
//     }

//     return count;
// }

module.exports = vowel;