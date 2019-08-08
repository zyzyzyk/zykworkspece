// const sleep = time => {
//   return new Promise((resolve, reject) => setTimeout(resolve, time))
// }
// sleep(5000)
//   .then(() => {
//     console.log('1');
//   })

// function *sleepGenerator(time) {
//   yield new Promise((resolve, reject) => {
//     setTimeout(resolve, time);
//   });// 碰到yield停下来
//   console.log('aaaa');
// }
// sleepGenerator(0)
//   .next()
//   .value
//   .then(() => {
//     console.log('lll');
//   })
// console.log(sleepGenerator().next().value.then(() => {
//   console.log('aaa');
// }));
// console.log(sleepGenerator().next());

// function sleep(time) {
//   return new Promise(resolve => setTimeout(resolve, time));
// }
// async function output() {
//   let out = await sleep(1000);
//   console.log(1);
//   return out;
// }
// output();

function sleep(callback, time) {
  if(typeof callback === 'function') {
    setTimeout(callback, time);
  }
}
sleep(function() {
  console.log('sss');
},1000)