var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting = string1 + ' ' + string2;
console.log('(1)', greeting);

var product = { name: '도서', price: '4200원' };
var message = '제품' + product.name + '의 가격은' + product.price + '입니다';
console.log('(2)', message);

var multiline = '문자열1\n문자열2';
console.log('(3)', multiline);

var value1 = 1;
var value2 = 2;
var boolValue = false;
var operate1 = '곱셈값은 ' + value1 * value2 + '입니다.';
console.log('(4)', operate1);

var operate2 = '불리언 값은 ' + (boolValue ? '참' : '거짓') + '입니다.';
console.log('(5)', operate2);
