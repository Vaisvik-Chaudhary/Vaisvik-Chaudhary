
function factor(num) {
  return Array(num) // create array 
    .fill(null) // assign null value in array
    .map((item, index) => index + 1) // map the data 
    .reduce((pv, cv) => pv * cv); // return multiplication of current value into previous value
}
console.log(factor(3), factor(4), factor(5), factor(6));
