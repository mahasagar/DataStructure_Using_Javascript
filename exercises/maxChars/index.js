
function maxChars(str){
    var keyValue = {};
    var maxCount = 0,maxKey=null;
    for(let character of str){
        keyValue[character] = keyValue[character] + 1 || 1;
        if(maxCount < keyValue[character]){
            maxCount = keyValue[character];
            maxKey = character;
        }
    }
    return maxKey;

}
module.exports = maxChars;