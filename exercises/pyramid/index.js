function pyramid(n,row =0,str = '') {
    if(n === row){
        return;
    }
    if(str.length === 2 * n -1){
        console.log(str);
        return pyramid(n,row+1);
    }
    const mid = Math.floor((2 * n -1)/2);
    if((mid - row <= str.length) && (mid +row >= str.length)){
        str += '#';
    }else{
        str += ' ';
    }
    // console.log('str: '+str);
    pyramid(n,row,str);
}
pyramid(5);
// function pyramid(n) {
pyramid(5);
//     const mid = Math.floor((2 * n -1)/2);
//     for(let row = 0 ;row < n ; row++){
//         let level = '';
//         for(let col =0; col < Math.floor(2 * n-1); col ++){
//             if(mid - row <= col && mid + row >= col){
//                 level += '#';
//             }else{
//                 level += ' ';
//             }
//         }
//         console.log(level)
//     }
// }

module.exports = pyramid;
