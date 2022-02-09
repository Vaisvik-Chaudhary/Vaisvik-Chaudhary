const numbers = [8,5,9,3,5];
const sum = numbers.reduce((firstnum,lastnum) => {
    return firstnum + lastnum;
})
console.log(sum/numbers.length);
