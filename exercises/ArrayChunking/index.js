// [1,2,3,4,5,6,7]
// 3



function chunk(arr,size){
    const chunked = [];
    for(let element of arr){
        const last = chunked[chunked.length -1];
        if(!last || last.length === size){
            chunked.push([element]);
        }else{
            last.push(element);
        }
    }
    return chunked;
}


// function chunk(arr,size){
//     const chunked = [];
//     let arrayIndex = 0;
//     while(arrayIndex < arr.length){
//         chunked.push(arr.slice(arrayIndex,arrayIndex + size));
//         arrayIndex += size;
//     }
//     return chunked;
// }

module.exports = chunk;