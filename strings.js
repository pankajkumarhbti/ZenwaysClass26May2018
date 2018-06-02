function FullName(firstName,secondName)
{

    //return firstName+" "+secondName;
    return   String.prototype.concat(firstName," ",secondName);
    
}

console.log(FullName("Pankaj","Sharma"));


function SplitName(FName)
{
var segName=FName.split(' ');
if(segName.length>3){
console.log("Invalid Name format");
return;
}
console.log("First Name :"+segName[0]);
if(segName[2])
{
console.log("Middle Name :"+segName[1]);
console.log("Last Name :"+segName[2]);
}
else 
console.log("Last Name :"+segName[1]);
}
SplitName("Pankaj Kumar Sharma hjhj");
