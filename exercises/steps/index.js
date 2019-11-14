function steps(n,row = 0, str =''){
    if(n === row){
        return;
    }
    if(n === str.length){
        console.log(str);
        return steps(n,row + 1);
    }
    if(str.length <= row){
        str += '#';
    }else{
        str += ' ';
    }
    steps(n ,row,str);
}
// steps(3)
//     steps(3,0,'') //#
//     steps(3,0,'#');// # 
//     steps(3,0,'# ');//#  
//     steps(3,0,'#  ');//print('#  ');

//     steps(3,1);



// function steps(n) {
//     for(let i =0 ; i < n;i++){
//         let row = 0,str='';
//         for(let j = 0 ; j < n;j++){
//             if(j <= i){
//                 str = str + '#';
//             }else{
//                 str = str + ' ';
//             }
//         }
//         console.log(str);
//     }
// }
module.exports = steps;
// #  
// ## 
// ### 
