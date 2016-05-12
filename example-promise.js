// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp){
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
//
//
// // PROMISES section
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log("promise success", temp);
// }, function(err) {
//   console.log("promise error", err);
// })

//Challenge area

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === "number" && typeof b === "number"){
      resolve(a+b);
    }else{
      reject('One of the variables was not a valid type');
    }
  });

}

addPromise(2,3).then(function(answer) {
  console.log("The answer is", answer);
}, function(error){
  console.log(error);
});


addPromise("asdf",3).then(function(answer) {
  console.log("The answer is", answer);
}, function(error){
  console.log(error);
});
