/*multi
line
javascript*/
//console.log('Hello World!') //single line javascript
//console.log('Irfan Shadik Rishad')
//using var
/*var x = 2;
var y = 4;
var z = x + y;
console.log(z)*/
//using let
/*let x = 1;
let y = 4;
console.log(x+y);*/
//using const
/*const x = 3;
const y = 7;
console.log(x+y);*/
//without declaring
/*x = 5;
y = 10;
console.log(x+y);*/
/*let name;
name = 'seiseibo';
function namee(){
    document.getElementById('header').innerHTML = name ;
}
//let clas = 12, hobby = 'coading';
//console.log(clas, hobby)
function save(){
    console.log('Working...')
}
save()
let sa;
console.log(sa);*/
/*let n = 'seiseibo';
console.log(n);
n = 'retest';
console.log(n)*/

//numbers
/*let f = '3' + 5 + 3;
let g = 3 + 5 + '1' + 1; //first two will be addition the string will be added as string
console.log(f, g) */

//block scope
const x = 1;
console.log('value of x outside the block', x);
{
    const x = 2;
    console.log('value of x inside the block', x);
}
console.log('value of x outside the block', x);


