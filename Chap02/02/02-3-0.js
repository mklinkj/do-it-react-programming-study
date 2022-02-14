var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [array1[0], array1[1], array2[0], array2[1]];
console.log('(1)', combined);

var combined = array1.concat(array2);
console.log('(2)', combined);

var combined = [].concat(array1, array2);
console.log('(3)', combined);

var first = array1[0];
var second = array1[1];
console.log('(4)', first, second);

var three = array1[2] || 'empty';
console.log('(5)', three);

function func() {
  var args = Array.prototype.slice.call(arguments);
  console.log('(6)', args);

  var others = args.slice(1, args.length);
  console.log('(7)', others);
}

func(1, 2, 3, 4, 5);
