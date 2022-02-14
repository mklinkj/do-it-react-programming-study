var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
const combined = [...array1, ...array2];
console.log('(1)', combined);

const [first, second, three = 'empty', ...others] = array1;
console.log('(2)~(6)', [first, second, three, others]);

// 올바르지 못한 예
// var wrongArr = ...array1; (6)

function func(...args) {
  var [first, ...others] = args;
  console.log('(7)', [first, ...others]);
}

func(1, 2, 3, 4, 5);
