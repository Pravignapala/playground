//callback  function
const square2 = (n)=>n**2;
const net=(callback,n)=>callback(n);
console.log(net(square2,4))//16

// return function
function a(m){
    return function(n){
        return function(o){
            return m+n+o;
        }
    }
}
console.log(a(3)(6)(7))//16

//Functional Programming Methods
//foreach
let a1=[2,4,5,6,7,8]
a1.forEach((num,i,a2)=>{
    console.log("high order function",num*2)
})

//foreach
function sumArray(arr){
    let sum=0;
arr.forEach((num)=>sum+=num)
return sum
}
console.log(sumArray(a1))//32

//setInterval
const say=()=>{
    console.log("hii")
}
//setInterval(say,3000)
//setTimeout
setTimeout(say,5000)