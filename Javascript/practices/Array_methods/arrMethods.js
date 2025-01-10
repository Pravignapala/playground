const arr=Array()
console.log(arr)
const arr1 = [1,2,3,4,5,5,'dkhw',{object:'red'},{tear:['wear','ferros','choco']}]
console.log(arr1)
console.log('modifying the element')
arr1[2]=5
console.log(arr1[2])
console.log(arr1.length)
console.log(arr1[3])
console.log('array of objects')
let ObjArr=[{name:'pravigna'},{Dob:'21-11-2000'},{location:'kansas'}]
let ObjArr2={name:'pravigna',Dob:'nov-21',loc:'kansas'}
console.log('checking Array')
console.log(Array.isArray(ObjArr2))
console.log(Array.isArray(ObjArr))
console.log(ObjArr[0])
console.log(ObjArr2[0])
let ArrArr=[{aa:['re','te','fef']},{sec:['yi','re','ty']}]
console.log(ArrArr)

console.log('Accessing the Array')
let AccArr=ArrArr[0]
let AccLast=ArrArr.length-1
let lastind=ArrArr[AccLast]
console.log(AccArr)
console.log(lastind)
console.log(ArrArr[[0]])
let ArrCons=Array(3)
console.log('Array Constructor '+ArrCons)
console.log(ArrCons)
let arrfill=ArrCons.fill(':)')
console.log('fill the array with static values')
console.log(arrfill)
const arrconc=ObjArr.concat(ArrArr)
console.log('concat function')
console.log(arrconc)
const IndexOfArr= ['re','ru','gu','of','te']
console.log(IndexOfArr.indexOf('of'))
let Index = IndexOfArr.indexOf('of')
if(Index!=-1){
console.log('items does exist in array')
}else{
console.log('items does not exis in array')
}
Index!=-1?console.log('item exists terinary ops'):console.log('item does not exists')
console.log(IndexOfArr.lastIndexOf('re'))
console.log('includes')
console.log(IndexOfArr.includes('reg'))
const arrStr=[{name:['I','AM','PRAVIGNA','PALA']}]
console.log(arrStr.toString())
console.log(IndexOfArr.join( ))
console.log(IndexOfArr.join(' '))
console.log('slice method')
console.log(IndexOfArr.slice(0,4))
console.log('splice method')
console.log(IndexOfArr.splice(0,3))
console.log(IndexOfArr.splice(1,3,'pre','pro','ces'))
console.log(IndexOfArr)

const numbers = [1, 2, 3, 4, 5]
console.log(numbers.splice(0, 1))
console.log('in splice , first parameter is position of target, second parameter is number of item to be added')
console.log('push method')
numbers.push(9)
console.log(numbers)

console.log('pop method')
numbers.pop()
console.log(numbers)
console.log('shift method')
numbers.shift()
console.log(numbers)
console.log('unshift method')
numbers.unshift(2)
console.log(numbers)
console.log('reverse method')
numbers.reverse()
console.log(numbers)

console.log('Sort methods')
numbers.sort()
console.log(numbers)
IndexOfArr.sort()
console.log(IndexOfArr)

console.log('Array of Arrays')
const arrofarr=[[4,5,6,6],[5,4,52]]
console.log(arrofarr)
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd=['Node', 'Express', 'MongoDB']
const fullstack=[frontEnd,backEnd]
console.log(fullstack)
console.log(fullstack[0])