var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Luke'));

// var person = {
//   name: 'Luke',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

//Challenge area
function add (a, b) {
  return a + b;
}

// console.log(add(1,3));
// console.log(add(9,0));

// addStatement
var addStatement = (a,b) => {
  console.log(add(a,b));
};

// addExpression
var addExpression = (a,b) => console.log(add(a,b));

addStatement(2,4);
addExpression(3,9);
