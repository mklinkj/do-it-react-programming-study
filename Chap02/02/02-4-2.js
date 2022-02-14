// ES6의 불변 변수 사용 방법 알아보기 - 2
const arr2 = [];
arr2.push(1);
console.log(arr2);

arr2.splice(0, 0, 'a');
console.log(arr2);

console.log(arr2.pop()); // 1

const obj2 = {};
obj2['name'] = '내이름';
console.log(obj2);

Object.assign(obj2, { name: '새이름' });
console.log(obj2);

delete obj2.name;
console.log(obj2);
