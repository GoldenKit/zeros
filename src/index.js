module.exports = function getZerosCount(number) {
let k = 0;
let n = 1;
while (Math.floor(number/(Math.pow(5,n))) > 0) {
  k = k + Math.floor(number/(Math.pow(5,n)));
  n++;
}
return k;
}
