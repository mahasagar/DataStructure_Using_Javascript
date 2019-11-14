
function capitalize(str) {
    str = str.split(' ');
    var words = [];
    for(let oneWord of str){
        words.push(oneWord[0].toUpperCase() + oneWord.slice(1));
    }
    return words.join(' ');
}


// function capitalize(str) {
//     let newStr = '';
//     for(let index in str){
//         if(!str[index - 1]){
//             newStr = newStr + str[index].toUpperCase();
//         }else if(str[index - 1] === ' '){
//             newStr = newStr + str[index].toUpperCase();
//         }else{
//             newStr = newStr + str[index]
//         }
//     }
//     return newStr;
// }


module.exports = capitalize;
