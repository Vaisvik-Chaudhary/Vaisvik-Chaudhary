var arr = ["Vaisvik", "Ronak", "Bhargav", "Mohit", "Divyansh", "Mohit", "Ronit", "Bhargav"];

var outputArray = [];

function removeusingSet(arr) {
let outputArray = [...new Set(arr)];
return outputArray
}

console.log(removeusingSet(arr));