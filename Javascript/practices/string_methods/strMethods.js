let string3 = '30 Days Of JavaScript'
console.log(string3.charCodeAt(3))  
console.log('trial for indexOf '+string3.indexOf('S'))
console.log(string3.substring(14,17).split(''))
console.log('trial with search '+ string3.search(/ /gi))
console.log(string3.match('JavaScript'))
console.log('2nd match with regular expression only returning result in  string if it combined with string in console '+string3.match(/javascript/gi)) 
let string5= '30 Days Of JavaScript and 30 Days Of JavaScript'
console.log('without combinig with string for match then it will return array only in regular expression if the match of words are more than one then also it will return all')
console.log(string5.match(/javascript/gi))
console.log(string5.match('JavaScript'))

//Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let string4 = 'pravigna pala is learnig the basic for future'
console.log("Try programiz.pro");
console.log(string4)
console.log(string4.search('sf'))
console.log(string4.charAt(6))
console.log(string4.indexOf('the'))
console.log(string4.includes('the'))
console.log(string4.replace('the','an'))
console.log(string4.charCodeAt(0))
console.log(string4.split(''))
console.log(string4.split(' '))
let array = string4.split(' ')
console.log(array[0].toUpperCase()+' '+array[1].toUpperCase())
console.log(string4.startsWith('p'))
console.log(string4.concat('purpose '))
console.log(string4.trim())
console.log(string4.lastIndexOf('future'))

let string6 = 'love'
let number=4
console.log(string6.repeat(10))
console.log(typeof 'love')
console.log(typeof 4)
console.log(typeof true)
