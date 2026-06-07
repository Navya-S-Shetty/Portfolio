
function display()
{
    alert("Hi, Welcome");
}

console.log("Working")
document.write("using write")
document.writeln("<br>using writeln")
document.writeln("<br>")
document.writeln(7+3)
document.writeln("<br><h3>Heading using html tag in js file</h3>")


var a = 10
console.log(a)

//redeclare
var a = 30
console.log(a)

//reassign
a = 100
console.log(a)

function hi()
{
    var z = 70
    console.log(z)
}

hi()


let b = 10
console.log(b)

b = 20
console.log(b)

let stuname = "Navya"
let cgpa = 8.73
let course = "Engineering"

console.log(`hi my name is ${stuname} with cgpa of ${cgpa} in ${course}`)

console.log(2**3) //exponential

console.log(5 == "5")  //true
console.log(5 === "5")  //false

console.log(typeof(3.24)) //number
console.log(typeof'a')  //string
console.log(String instanceof(Object))

console.log(![]) //false  because [] is true
console.log([1] == 1) //true
console.log([] == ![]) //true

//array
let array = [1, 2, 3];
console.log(array[2]);

//object

let person = {
    sname: "Navya",
    age: 22,
    course: "Full Stack Development",
};

console.log(person.sname);
console.log(person.age);

let fruits = {
    fruit1: "apple",
    fruit2: "watermelon",
};

console.log(fruits.fruit2);

//function

let home = "Sweet Villa";
function greeting() {
    let greet = `hi welcome to our ${home}`;
    return greet;
}

console.log(greeting());
document.writeln(greeting());

//types of functions 
let res1 = add1(2, 3);
function add1(a, b) //with par, with return 
{
    return a + b;
}
console.log("with par, with return: ", res1);



let res2 = add2();
function add2() //no par, with return
{
    let a = 10;
    let b = 20;
    return a + b;
}
console.log("no par, with return: ", res2);



let res3 = add3();
function add3() //no par, no return
{
    let a = 100;
    let b = 200;
    console.log("no par, no return: ", a + b);
}
let res4 = add4(50, 60);



function add4(a, b) //with par, no return
{
    console.log("With par, no return: ", a + b);
}

//reverse
let str = "navya";
let rev = "";
let size = str.length - 1;

    for(let i = 0; i < str.length; i++)
    {
        rev  = rev + str[size];
        size--;
       
    }

console.log(rev);

//palindrome
let pal = "tat";
if(pal == str)
{
    console.log("Yes, Palindrome");
}
else{
console.log("Not Palindrome");
}

//find vowel and consonent
let word = "apple";
word = word.toLowerCase();

for(let i = 0; i < word.length; i++)
{
    let ch = word[i];
if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
{
    console.log("Vowel: ", ch);
}
else
    {
        console.log("Consonent: ", ch);node

    }
}

//eliminate spaces in a string

let p= " na  vy a ";
p = p.replace(/\s/g, "");
console.log(p);