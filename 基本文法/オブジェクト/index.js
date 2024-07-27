/*
===============
オブジェクトにおける分割代入
===============
*/
{
const languages = {
  ja : "日本語",
  en : "英語" 
};

// オブジェクトにプロパティを追加
languages["sp"] = "スペイン語";
languages.ge = "ドイツ語";

// オブジェクトから分割代入
const {ja,sp,en,ge} = languages;
console.log(ja); // => 日本語
console.log(en); // => 英語
console.log(sp); // => スペイン語
console.log(ge); // => ドイツ語


const key1 ="ja";
const key2 ="en";
const key3 ="sp";

// ブランケット記法は、変数を呼び出す際に使える
console.log(languages[key1]); // => 日本語
console.log(languages[key2]); // => 英語
console.log(languages[key3]); // => スペイン語

// ドット記法は、変巣を呼び出す際につかえない
console.log(languages.key1); // => undefined
console.log(languages.key2); // => undefined
console.log(languages.key3); // => undefined

}

// 配列の場合の分割代入

{

const languages = ["日本語","英語","スペイン語"];
const [ja,en,sp] = languages

console.log(ja);
console.log(en);
console.log(sp);

}


{
// オブジェクトにアクセスする際に、指定されたプロパティ名は、暗黙的に、文字列化される。
const obj = {};
const keyObject1 = { a: 1 };
const keyObject2 = { b: 2 };

// この時、プロパティ名「keyobject1」は、文字列化される。
// objectの場合は、{key : value}が{object : object}に変換される

obj[keyObject1] = "1";  // objの中身は、{ "[object Object]": "1" }になる

// 同じプロパティ名に代入することになる
obj[keyObject2] = "2";
console.log(obj); //  { "[object Object]": "2" }

}

// 唯一の例外として、Symbolだけは文字列化されずにオブジェクトのプロパティ名として扱える
{
  const obj = {};
  // Symbolは例外的に文字列化されず扱える
  const symbolKey1 = Symbol("シンボル1");
  const symbolKey2 = Symbol("シンボル2");
  obj[symbolKey1] = "1";
  obj[symbolKey2] = "2";
  console.log(obj);
  console.log(obj[symbolKey1]); // => "1"
  console.log(obj[symbolKey2]); // => "2"

}