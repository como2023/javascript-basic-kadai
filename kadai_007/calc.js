// 変数numに1〜50までのランダムな整数を代入する
let num = Math.floor(Math.random() *50)+1;

// 変数numを確認（非表示）
console.log(num);

//変数numが15の倍数の場合、"15の倍数です"文字列を出力
if(num%15 === 0){
  console.log('15の倍数です');
//変数numが3の倍数の場合、"3の倍数です"文字列を出力
}else if(num%3 === 0){
  console.log('3の倍数です');
//変数numが5の倍数の場合、"5の倍数です"文字列を出力
}else if(num%5 === 0){
  console.log('5の倍数です');
}
//それ以外は変数numを出力
else{
  console.log(num);
}