
// word.replace('/[^\w]/g','').toLowerCase();

function cleanString(str){
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}
function anagram(str1,str2){
    return cleanString(str1) === cleanString(str2);
}

// function anagram(str1,str2){
//     str1 = str1.replace(/[^\w]/g,"").toLowerCase();
//     str2 = str2.replace(/[^\w]/g,"").toLowerCase();
//     if(str1.length !== str2.length){
//         return false;
//     }
//     let str1Map = {},str2Map = {};

//     for(let i = 0;i < str1.length;i++){
//         str1Map[str1[i]] = str1Map[str1[i]] + 1 || 1;
//         str2Map[str2[i]] = str2Map[str2[i]] + 1 || 1;
//     }
//     console.log(str2Map);
//     for(oneKey in str1Map){
//         if(str1Map[oneKey] !== str2Map[oneKey]){
//             return false;
//         }
//     }
//     return true;
// }

module.exports = anagram;