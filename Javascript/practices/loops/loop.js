let first='pravi'
console.log('inside loop file',first)
//for loop
for(let i=0;i<3;i++){
    console.log(i)
}
//The Code below can reverse an array.
let arr=[1,2,3,4,5]
console.log(arr.reverse())
let lastIndex=arr.length-1
let newArr=[];
//for loop
for(let i = lastIndex;i>=0;i--){
    newArr.push(arr[i])
}
console.log('loop to reverse a array',newArr)
let count= 2
// while loop
while(count<=3){
    console.log('hi',count)
count++
}
//do while loop
do{
    console.log('do',count)
    count++
}while(count<=6)
// for of loop
let arr1=['pravi','is','a','good','girl']
for(const i of arr1){
    console.log('for of loop',i.toUpperCase())
}
// foreach loop
arr1.forEach((word,i,arr2)=>{
    console.log('each word',word,'index of word',i)
console.log('array',arr2)

})
//for in loop
let ob1={
    name:'likhitha',
    age:'24',
    gender:'female'
}

for(const i in ob1){
    console.log('iterating through object',i,ob1[i])
}

//break 
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
      break
    }
    console.log('break',i)
  }

  //continue
  for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log('continue',i);
}