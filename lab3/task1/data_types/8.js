alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5

function randomInteger(min, max) {
  // now rand is from  (min-0.5) to (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

alert( randomInteger(1, 3) );
//An alternative way could be to use Math.floor for a random number from min to max+1:

 function randomInteger(min, max) {
  // here rand is from min to (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert( randomInteger(1, 3) );
//Now all intervals are mapped this way:

//values from 1  ... to 1.9999999999  become 1
//values from 2  ... to 2.9999999999  become 2
//values from 3  ... to 3.9999999999  become 3