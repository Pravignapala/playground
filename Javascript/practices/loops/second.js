let num='60'
let numInt=parseInt(num)
let numNum=Number(num)
let numsign=+num
console.log(numInt+numNum+numsign)

let float='4.9'
let numFloat=parseFloat(float)
console.log(numFloat)
let Intfloat=parseInt(numFloat)
console.log('Float to Int'+ Intfloat)


let hungrylevel=3
if(hungrylevel>3){
console.log('take the food and drink')
}else if(hungrylevel>0){
console.log('take the food')
}else{
console.log('don\'t take the food')
}

switch(hungrylevel){
case 5:
console.log('high level hungry')
break
case 4:
console.log('high medium level hungry')
break
case 3:
console.log('medium level hungry')
break
case 2:
console.log('low mediun level hungry')
break
case 1:
console.log('low level hungry')
break
default:
console.log('not hungry')
}

let num1 =  -6
switch (true) {
  case num1 > 0:
    console.log('Number is positive')
    break
  case num1 == 0:
    console.log('Numbers is zero')
    break
  case num1 < 0:
    console.log('Number is negative')
    break
  default:
    console.log('Entered value was not a number')
}

let ter=2
ter>0?console.log('true'):console.log('false')

let age=prompt('enter age')
age>18?console.log('eligible to driving a car'):console.log('wait to turn 18 years')


