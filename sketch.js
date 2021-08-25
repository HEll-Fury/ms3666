

var a = prompt('Enter the first variable: ');
var b = prompt('enter the second variable');
function setup(){
  var b1= createButton('click here to swap the variable');
b1.mousePressed (swap);
  }


function draw()
{
}
function swap(){     
[a,b]=[b,a];

console.log("the first variable after sawpping " +a);
console.log("the second variable after swapping "+b);

}