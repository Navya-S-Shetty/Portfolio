//area of rectangle
let area = findArea(2, 3);

function findArea(a, b)
{
    return a * b;
}

console.log("Area of Rectangle: ", area);


//area of circle
const pi = 3.14;
res = areaCircle(3);

function areaCircle(radius)
{
    return (pi * radius * radius);
}

console.log("Area of Circle: ", res);

//different ways of declaring functions
//function declaration -- named function hoisted
function square1(a)
{
    console.log(a * a);
}
square1(5);

//function expression
let square2 = function(a)
{
    console.log(a * a);
}
square2(9);

//arrow function
let square3 = (a) => console.log(a * a);
square3(2);

//anonymous function (IIFE - Immediate Invoked Function Expression)
(function (a){
    console.log(a * a);
})(5);

(function () {
    console.log("This is anonymous function");
})();

//practice

let res1 = function (a)
{
    console.log(a + 10);
}
res1(3);

let res2 = (a) => console.log(a + 10);
res2(9);

(function (a) {
    console.log(a + 10);
})(7);
