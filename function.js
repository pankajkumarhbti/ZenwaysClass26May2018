//Anonymous function doesn't have a name. Its mendatory to assign it to some variable before use.
/*
var sum1=function (param1,param2)
{
    return param1+param2;
}

//console.log(sum(2,3));
console.log(sum1(1,2));
//------

var sum=function Add (param1,param2)//here Add cannot be used 
{
    return param1+param2;
}

function sum(a,b)
{
    if(typeof a ==undefined)
    
    console.log(a,b);
}

sum(1,2);
sum(1);
sum(1,2,3,4,5);
sum();


function CallMe()
{

    var a=0;
    if(a<10)
    {
        a=a+1;
        
    CallMe();

    }
    

    console.log(a);
}
*/

function recur(count,start)
{
    if((start==0 || start) && count) 
     ++start;
     else
     {
         console.log("Invalid Param");
         return;
     }
console.log(start);
if(start<count)
{
  recur(count,start);
}
}
//recur(0,0);
//********factorial */
/*
function fact(num)
{
var res=num;
if(num >0)
{
 res=res*fact(num-1);
}
console.log(res);
}
fact(3);
*/
//Nested functions
function addSquare(a,b){
    function square(x){
        return x*x;
    }
    return square(a) +square(b);
}
console.log( addSquare(2,3));
// Calculate area of tringle using nested functions








