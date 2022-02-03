const arr = [1, 1, 2, 2, 3, 4, 4, 5, 6, 5, 7]; //declare array with repeated value

const distinct = arr.reduce((unique, item) => {
  //use array reduce method for data filtering
  return unique.includes(item) ? unique : [...unique, item]; // use ternary operator and return unique array
}, []);

console.log(distinct); // print distinct array
