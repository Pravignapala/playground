let string = '  30 Days Of JavaScript  '
console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]
let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
let string1 = '30 Days Of JavaScript'
console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false - it is case sensitive!
console.log('trial 1 for replace'+ string.replace('Of','in'))
console.log('trail 2 for trim'+string.trim())
console.log('trail 3 for split'+ countries.split(','))
console.log(countries.split(', ') + '\nqdfce') //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
console.log(countries.includes('Finland'))
console.log('trial 4 for substr'+ string.substr(0,6))
console.log('trial 5 for substring'+string.substring(4,9))
console.log('trial 6 for charAt '+ string.charAt(6))
console.log('trial 6 for charAt '+ string.charAt(6) + string.charAt(6).toUpperCase())
let arry=[3,4,5,6,6]
let arrlast =arry.length-1
let lastindex=arry[arrlast]
console.log('trail 7 for array '+arry[0]+' lastnumber '+lastindex)
console.log(lastindex)
