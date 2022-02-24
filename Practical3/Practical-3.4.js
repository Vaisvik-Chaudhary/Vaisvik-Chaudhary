let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [5,6,7];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [5,7,6]
