console.log("Scopes")
let x =10 //global scope
console.log('global scope variable',x)
check='this is coming  from variable checking window scope'
console.log(window.check) // this is coming  from variable checking window scope
console.log(window.x) // undefined
var name='pravi'
console.log(window.name) //pravi
//checking hoist and TDZ error for let and const
console.log("TDZ error means variable is not initialized",a) //scope.js:10 Uncaught ReferenceError: Cannot access 'a' before initialization at scope.js:10:59 
let a =10;
//local scope
function add(){
    let x=5;
    let y=6;
    console.log(x+y)
}
add()
//console.log('verifying local scope/function scope ',y) // scope.js:19 Uncaught ReferenceError: y is not defined at scope.js:19:53

// block scope
if(true){
    let r=9
    const y=9
    console.log(r+y)
}
console.log("verifying the block scope",r,y) //scope.js:27 Uncaught ReferenceError: r is not defined at scope.js:27:41