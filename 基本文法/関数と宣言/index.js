/*
===============
関数の引数の扱い
===============
*/

// 関数呼び出し時に、引数が少ない場合は、undefinedが代入される
// undefinedで判定された結果、加算処理時に、計算できないと判断され、NaNが返り値となる
// function sum (a,b) {
//   return a + b;
// }
// console.log(sum(1)); // => NaN
// console.log(sum(1,2)); // => 3

// デフォルト値を引数に設定することで、NaNを回避
function sum (a = 0,b = 0) {
  return a + b;
}
console.log(sum(1)); // => 1
console.log(sum(1,2)); // => 3


// 関数呼び出し時に、引数が多い場合,左から順に引数に値が代入され、余った分は、切り捨てられる。
function sum (a =0 ,b = 0) {
  return a + b ;
}
console.log(sum(1,2,3,4,5)); // => 3

