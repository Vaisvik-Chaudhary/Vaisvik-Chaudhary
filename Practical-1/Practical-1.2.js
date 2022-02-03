const number = [45,65,85,29,63]
const maxnum = number.reduce((num1, maxnumber) => {
    if(num1 < maxnumber){
        return maxnumber;
    }
    else{
        return num1;
    }
});
console.log(maxnum);