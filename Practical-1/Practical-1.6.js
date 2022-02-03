function addStr(str){
    let strArr = str.split(",");
    let sum = strArr.reduce(function(total, num){
      return parseFloat(total) + parseFloat(num);
    });

    return sum;
}
console.log(addStr("1, 3.0, 3.9, 4, 6.5, 8, 2, 8, 7, 10"));