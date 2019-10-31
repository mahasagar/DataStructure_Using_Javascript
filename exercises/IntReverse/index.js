function integerRev(num){
    value = num.toString();
    var res = parseInt(value.split('').reduce((rev,char) => char+rev,''));
    var one = Math.sign(res);
    return res * Math.sign(num);
}
integerRev(-15)

module.exports = integerRev;