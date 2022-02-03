const arr1 = [51,45,86,15] //first array declare
const arr2 = [80,15,86,95] //second array declare


function uniqueDataFind(a, b) {
    var results = []; //declare array for result
      for (const element of  a) { //loop for first array
          if( b.indexOf(element) == -1){ // if elements not exists then add in result array
                 results.push(element) // push in array
  }
      }
  b.forEach(element => { // loop for second array 
      if( a.indexOf(element) == -1){ //if value doesnt exist in result array then put in result array
                 results.push(element)
  }
  });
         
    console.log(results); //show result array
  }
  
uniqueDataFind(arr1,arr2); // function call with arguments both array