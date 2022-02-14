// ES6의 불변 변수 사용 방법 알아보기 - 3 : 무결성을 유지하면서 불변 변수의 값을 수정해야하는 경우...
const num1 = 1;
const num2 = num1 * 3;
console.log('(1)', num2);

const str1 = '문자';
const str2 = str1 + '추가';
console.log('(2)', str2);

const arr3 = [];
const arr4 = arr3.concat(1);
console.log('(3)', arr4, arr3);

const arr5 = [...arr4, 2, 3];
console.log('(4)', arr5);

const arr6 = arr5.slice(0, 1);
console.log('(5)', arr6, arr5);

const [first, ...arr7] = arr5;
console.log('(6)', arr7, first);

const obj3 = { name: '내이름', age: 20 };
const objValue = { name: '새이름', age: obj3.age };
const obj4 = { ...obj3, name: '새이름' };
console.log('(7)', obj4);

const { name, ...obj5 } = obj4;
console.log('(8)', obj5);

/*
  (1) 3
  (2) 문자추가
  (3) [ 1 ] []
  (4) [ 1, 2, 3 ]
  (5) [ 1 ] [ 1, 2, 3 ]
  (6) [ 2, 3 ] 1
  (7) { name: '새이름', age: 20 }
  (8) { age: 20 }
*/
