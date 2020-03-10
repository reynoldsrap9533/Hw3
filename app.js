
//Prompt The User
const start = prompt("Enter The start")
const end = prompt("Enter the end")
const step = prompt("Enter the step")

// Convert Variables into Integers
var num1 = parseInt(start);
var num2 = parseInt(end);
var num3 = parseInt(step);

//Condition to ensure step is not zero and if the numbers are actually numbers
if(isNaN(num3)==true || num3==0 || isNaN(num1)==true || isNaN(num2)==true){
  document.writeln("Please Reload and enter a valid Step value")
}

else{
  document.writeln("Start Value is " + start + "<br>");
  document.writeln("End Value is " + end + "<br>");
  document.writeln("Step Value is " + step + '<br>');
}

var arr = [];

//Generate Array Function
function generateArray(num1,num2,num3)
{
const len = Math.floor((num2 - num1) / num3) +1
return Array(len).fill().map((_,idx) => num1 + (idx * num3))

}

//Generate Sum of Array Function
function sum(arr,num1,num2,num3)
{

  var sum=0;
	for(var i=0;i<arr.length;i++){
		if (Number.isFinite(arr[i])) {
			sum += arr[i];
		}
	}
  return sum;
  

}
//Convert Array Elements into Binary
function convertBinary()
{



}

document.write("The Generated Array is  " + generateArray(num1, num2, step) + '<br>');

document.write("The Sum is " + sum(arr, num1,num2,num3) + '<br>');

document.write("The Binary of Absolute Element Values are: ???????? ")

