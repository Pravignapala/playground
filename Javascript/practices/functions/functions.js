//function declaration
function first(){
    console.log("first function") //first function
}
console.log("testing") //testing
first();
//function expression
let square=function(num){
    return num*num;
};
console.log(square(3))//9
//Arrow function
const mul=(a,b)=>a*b;
console.log('multiplication',mul(3,5));//multiplication 15
//parameter/arguments
function add( n1,n2){
    return n1+n2;
}
console.log(add(4,5))//9
//Default Parameters
function myname(name="pravi"){
    console.log(`guest name is ${name}`)
}
myname();//guest name is pravi
myname('pala');//guest name is pala
function sum(a,b){
    return a+b;
}
let total= sum(4,6);
console.log(total);//10
function sumall(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum
}
console.log(sumall(3,4,5,6,7,8))//33
const add1=(...num)=>{
    return num
};
console.log('rest parameters in arrow functions',add1(2,4,3,5,7)) //rest parameters in arrow functions (5) [2, 4, 3, 5, 7]
//Anonymous Function
const anon=function(){
    console.log('this is anonymous function')
}
anon();//this is anonymous function
//self invoking function
(function(){
    console.log('self invoking')
})();//self invoking
//simplified arrow function
const square1=(n)=>n*n;
console.log(square(4))//16