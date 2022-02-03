const array= [9,7,-10,-9,25];
const filtering = array.filter(item => item > 0); // if value is grater then 0 then return the value
console.log(filtering); // print positive value array
const sum = filtering.reduce(function(result,item1){ // sum of all the element of array using reducer
    return result + item1;
});
console.log(sum)