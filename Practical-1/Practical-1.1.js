const numbers = [8,5,9,3,5];
const average = numbers.reduce((firstnum,lastnum) => {
    return firstnum + lastnum;
})
console.log(average/numbers.length);