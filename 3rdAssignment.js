//Write a program to check the given number is a perfect square or not! (Don't use function)"

var n =parseInt(prompt("Enter the number"));
var squareroot = Math.sqrt(n);
var i= Math.floor(squareroot);
if(i*i== n)
{
 alert("Number is a perfect square");
}
else
{
alert("Number is not a perfect square");
}