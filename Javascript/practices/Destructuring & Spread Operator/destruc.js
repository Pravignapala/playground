//Destructuring & Spread Operator in JavaScript
//destructiong Array
const arr1=[3,4,6]
const [v1,v2,v3]=arr1
console.log(v1,v2,v3)//3 4 6
//destructing with default values
const country=['sweden','usa']
const [swe,usa,nor='norway']=country
console.log(swe,usa,nor) //sweden usa norway
//skipping elements in array
const numbers=[1,2,3,4,5,6]
const [one,,third,,fifth,]=numbers
console.log(one,third,fifth)//1 3 5
//nested array destructing
const fullstack=[
    ['html','css','javaScript'],
    ['java','nodejs','sql']
]
const[frontEnd,backEnd]=fullstack
console.log(frontEnd,backEnd)//(3) ['html', 'css', 'javaScript'] (3) ['java', 'nodejs', 'sql']
//Destructuring Objects
const person={
    name:'pravi',
    age:25,
    gender:'female'
}
const {name,age,gender}=person;
console.log(name,age,gender)//pravi 25 female
//Renaming Variables while Destructuring
const fullname={
    firstName:'pravigna',
    lastName:'pala'
}
const {firstName:fName,lastName:lName}=fullname
console.log(fName,lName)//pravigna pala

//nested Object Destructing
const info={
    name1:'redMe',
    address:{
        street:'green street',
        city:'pink city'
    }
}
const {name1,address:{street,city}}=info
console.log(name1,' in ',street,',',city)//redMe  in  green street , pink city
//function parameter destruction
const hello={
    fName:'pravigna',
    age1:24
}
const quick=({fName,age1})=> {
    return `hello this is ${fName} and I am ${age1} old`
}
console.log(quick(hello))//hello this is pravigna and I am 24 old

//Spread Operator
//copying arrays using spread
const num=[3.3,4,5,6]
const numb=[...num]
console.log(numb) //(4) [3.3, 4, 5, 6]
//merging arrays using spread
const colors=['red','blue','saffron','white']
const size=['small','medium','large']
const mer=[...colors,...size]
console.log(mer)//(7) ['red', 'blue', 'saffron', 'white', 'small', 'medium', 'large']
//coping objects using spread
const info1={
    name2:'likki',
    age:23,
    gender:'female'
}
const copyInfo1={...info1}
console.log(copyInfo1)//{name2: 'likki', age: 23, gender: 'female'}
//merging objects using spread
const info2={
    country:'USA'
}
const fullInfo={...info1,...info2}
console.log(fullInfo)//{name2: 'likki', age: 23, gender: 'female', country: 'USA'}
//rest operator in function arguments
function restOp(...args){
return args.reduce((sum,num)=>sum+=num,0);
}
console.log(restOp(2,3,4,5,6))//20
