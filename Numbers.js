/*
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
console.log(Number.EPSILON);

function circumference(r) {
    return parseFloat(r) * 2.0 * Math.PI;
  }
  
  console.log(circumference(4.567));
  // expected output: 28.695307297889173
  
  console.log(circumference('4.567abcdefgh'));
  // expected output: 28.695307297889173
  
  console.log(circumference('1abcdefgh'));
  // expected output: NaN
*/
 var arr =[];
for(var a=0;a<10;a++){
 //console.log (Math.floor( Math.random(10)*100));
arr[a]= Math.floor( Math.random(10)*100);
arr.sort();
}
//console.log(arr);
var dateString="10/01/1984";

var objDate=new Date(dateString);
console.log(objDate) ;