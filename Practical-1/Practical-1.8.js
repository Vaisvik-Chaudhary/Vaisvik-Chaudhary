var arr = [];
const n = 8;
while(arr.length< n){
    var retu = Math.floor(Math.random()*100)+1; // random number generation math.random between 0 to 1
    if(arr.indexOf(retu)===-1) arr.push(retu);

}
console.log(arr);