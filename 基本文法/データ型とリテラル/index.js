/* 
===============
データ型について
===============
// データ型は、大きく分けるとオブジェクト型とプリミティブ型
プリミティブ型の値は、それぞれtypeof演算子の評価結果として、その値のデータ型を返す。 
一方で、オブジェクトに分類される値は"object"となる。

nullについては、本来プリミティブ型に分類されるが、javascriptのバグで、オブジェクトに分離されている。
*/


//プリミティブ型（Undifined）
let value
console.log(typeof value); // => "undefined"


//プリミティブ型 (Boolean)
value = true ;
console.log(typeof value); // => "boolean"

//プリミティブ型 (number)
value = 42 ;
console.log(typeof value); // => "number"

// プリミティブ型 (Bigint)
value = 90000020203040n ;
console.log(typeof value); // => "bigint"

// プリミティブ型 (String)
value = "true" ;
console.log(typeof value); // => "string"

// プリミティブ型 (Symbol)
value = Symbol("シンボル") ;
console.log(typeof value); // => "symbol"

// プリミティブ型 (null)
value = null ;
console.log(typeof value); // => object

// オブジェクト (配列)
value = ["配列"] ;
console.log(typeof value); // => object

// オブジェクト
value = { "key": "value" } ;
console.log(typeof value); // => object

// オブジェクト　（関数）
value = function() {} ;
console.log(typeof value); // => object

/* 
=============================
数値について
=============================
数値には、整数リテラルと浮動小数点数リテラルがある。
また、数値は、2^53-1の範囲の値を扱うことが可能
*/

/* 
整数リテラルは以下の4種類を扱える
10進数（用途：数値）
2進数（用途：ビット演算）
8進数（用途：ファイルパーミッションなど）
16進数（文字のコードポイント、ＲＧＢ値など）
 */

// 10進数 ０～９の数字の組み合わせ
console.log(255); // => 255

// 2進数 0bからはじまる
console.log(0b10000000000); // => 1024

//　8進数　0oからはじまる
console.log(0o777);  // => 511

//　16進数　0xからはじまる.小文字、大文字は区別されない
console.log(0xff); // => 255
console.log(0xFF); // => 255

/* 
浮動小数点数をリテラルとして書く場合には、次の2種類の表記が利用できる。
3.14159 のような .（ドット）を含んだ数値
2e8 のような e または E を含んだ数値
 */

//0からはじまる浮動小数点数は、0を省略して書くことができるが、省略しないことを推奨
console.log(0.123); // => 0.123
console.log(.123); // => 0.123

/* 
eは指数（exponent）を意味する記号で、eのあとには指数部の値を書く 
たとえば、2e8は2×10の8乗となるので、10進数で表すと200000000となる。
 */
console.log(2e8); // => 200000000

/* 
=============================
Bigintについて
=============================
Number.MAX_SAFE_INTEGERの値よりも大きな整数を扱う場合に用いる。
BigIntリテラルは、数値の後ろにnをつけます。
数値型とBigIntは混ぜて、演算することはできない。
*/

// 最大安全数
const Maxnum = Number.MAX_SAFE_INTEGER;

// BigInt型
let BigInt =  90071992547409300000n

console.log(Maxnum); // => 9007199254740991
console.log(typeof Maxnum); // => number
console.log(typeof BigInt); // =>  bigint

// 数値型とBigIntは混ぜて、演算することはできない
//console.log(Maxnum * BigInt); // => Uncaught TypeError: can't convert BigInt to number

// 浮動小数点数は扱えない
//console.log(1.14n);  => Uncaught SyntaxError: identifier starts immediately after numeric literal

/* 
=============================
文字列について
=============================
文字列リテラル共通のルールとして、同じ記号で囲んだ内容を文字列として扱います。 
文字列リテラルとして次の3種類のリテラルがありますが、その評価結果はすべて同じ"文字列"になります。
*/

console.log("文字列");// => "文字列"
console.log('文字列');// => "文字列"
console.log(`文字列`);// => "文字列"

// 文字列を囲う記号と同じ記号を文字列として扱う場合はエスケープ
console.log('8\'oclock') // => 8'oclock

// 改行する場合は、改行を示す、エスケープ文字（\n）を持ちいる
console.log("複数行の\n文字列を\n入れたい")

// もしくは、テンプレートリテラル（バッククォートで囲む書き方)を用いる
console.log(
`複数の
文字列を
入れたい`
)

// テンプレートリテラルは、文字列の中に、変数を埋め込むことも可能

let text = "文字列";
console.log(`${text}を入れたい`) // => 文字列を入れたい

/* 
====================
nullについて
====================
nullリテラルはnull値を返すリテラルです。 nullは「値がない」ということを表現する値です。
次のように、未定義の変数を参照した場合は、 参照できないためReferenceErrorの例外が投げられます。
fooには値がないということを表現したい場合は、 null値を代入することで、null値を持つfooという変数を定義できます。 
これにより、fooを値がない変数として定義し、参照できるようになります。
 */

//foo; =>  "ReferenceError: foo is not defined"

const foo = null;
console.log(foo); // => null

