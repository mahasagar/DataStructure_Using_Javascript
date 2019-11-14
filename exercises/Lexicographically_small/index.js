function lexicographically(n,k){
                        // 5 , 42
    var total = k;
    let small = []
    for(var i=0;i<n;i++){
        small.push('a');
    }
    var updated = 0;
    for(var i = small.length - 1 ; i > 0 ;i--){
        if(k > 27){
            console.log(small[i] + ' i : '+i);
            small[i] = 'z';
            k = k - 26;
            updated++;
        }
    }
    if(k !== 0){
        let lastUpdate = n -  updated;
        console.log('lastUpdate : '+lastUpdate);
        var ch = 97 + k - lastUpdate;
        console.log('String.fromCharCode(65)  : '+String.fromCharCode(ch));
        small[lastUpdate - 1] = String.fromCharCode(ch);
        console.log(' K : '+k);
    }
    return small.join(',').replace(/[^\w]/g,"");
}









// a b c d e f g h i j  k  l   m   n  o  p  q  r  s  t  u  v  w  x  y  z
// 1 2 3 4 5 6 7 8 9 10 11 12 13  14  15 16 17 18 19 20 21 22 23 24 25 26


console.log(lexicographically(5,42));
// output : aaamz
// a a a a a 
// a a a a z
// a a a m z


// input  : 3,25
// a a a

// output : aaw

// 2 , 75



