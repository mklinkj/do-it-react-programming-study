// 02-6 객체 확장 표현식과 구조 분해 할당

// 기존 자바 스크립트의 구조 분해 사용방법 알아보기
var list = [0, 1];
var item1 = list[0];
var item2 = list[1];
console.log('(1)', item1, item2);

var item3 = list[2] || -1;
console.log('(2)', item3);

// 값 교환
var temp = item2;
item2 = item1;
item1 = temp;
console.log('(3)', item1, item2);

var obj = {
  key1: 'one',
  key2: 'two',
};
var key1 = obj.key1;
var key2 = obj.key2;
console.log('(4)', key1, key2);

var key3 = obj.key3 || 'default key3 value';
console.log('(5)', key3);

var newKey1 = obj.key1;
console.log('(6)', newKey1);
