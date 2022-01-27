//while loop
let i=1;
while(i<5){
    console.log(i);
    i++;
}

//do-while loop
let a=0;
let b=0;
do{
    a=a+i;
    console.log(i);
    i++;
}
while(i<6);

//for loop
for(let j =0;j<=5;j++){
    console.log(j);
}


//looping through array
let array = [8,5,9,6,4,2];
for(let x=0; x< array.length;x++){
    console.log(array.length);
}

//reverse loop
let item = ['car','fruit','chocolate'];
for(let p = item.length-1;p>=0;p--){
    console.log(`${p} = ${item[p]}`);
}

//break keyword
for(k=0;k<=50;k++){
    if(k>=10)
    break;
    console.log(k);
}

//nested for loop
for(let outer=0;outer<3;outer++){
    for(let inner=0;inner<4;inner++){
        console.log(`${outer} - ${inner}`);
    }
}
