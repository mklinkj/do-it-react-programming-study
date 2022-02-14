// ES6의 불변 변수 사용 방법 알아보기
const num = 1;
num = 3; // TypeError: Assignment to constant variable. 오류

const str = '문자';
str = '다른문자'; // TypeError: Assignment to constant variable.오류

const arr = [];
arr = [1, 2, 3]; // TypeError: Assignment to constant variable.오류

const obj = {};
obj = { name: '새 객체' }; // TypeError: Assignment to constant variable.오류
