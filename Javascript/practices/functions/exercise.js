//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function tempConv(oC){
return of =(oC*9/5)+32;

}
console.log(tempConv(11))//51.8
//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//The same groups apply to both men and women.
//Underweight: BMI is less than 18.5
//Normal weight: BMI is 18.5 to 24.9
//Overweight: BMI is 25 to 29.9
//Obese: BMI is 30 or more
function BMI(w,h){
let bmi=w/(h*h)
console.log(bmi,"bmi")//23.335466144755166 'bmi'
if(bmi<18.5){
    console.log("Underweight: BMI is less than 18.5")
}else if((bmi>18.5)&&(bmi<24.9)){
console.log("Normal weight: BMI is 18.5 to 24.9")
}else if((bmi>25)&&(bmi<29.9)){
console.log("Overweight: BMI is 25 to 29.9")
}else{
    console.log("Obese: BMI is 30 or more")
}
}
console.log(BMI(62, 1.63))//Normal weight: BMI is 18.5 to 24.9

//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer
function checkSeason(month){
    month=month.toLowerCase()
if(['december','january','february'].includes(month)){
    return 'winter'
}else if(['march','april','may'].includes(month)){
return 'spring'
}else if(['june','july','august'].includes(month)){
return 'summer'
}else if(['september','october','november'].includes(month)){
return 'autumn'
}else{
    return 'invalid error'
}
}
console.log(checkSeason('November'))//autumn
//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
//console.log(solveQuadratic()) // {0}
//console.log(solveQuadratic(1, 4, 4)) // {-2}
function solveQuadratic(a=0,b=0,c=0){
    if(a===0){
        return `{0}`
    }
    const discriminant=b*b-4*a*c;
    if(discriminant>0){
        const root1=(-b+Math.sqrt(discriminant))/(2*a);
        const root2=(-b-Math.sqrt(discriminant))/(2*a);
        return `{${root1},${root2}}`;
    }else if(discriminant===0){
        const root=-b/(2*a);
        return `{${root}}`
    }else{
        return `{}`;
    }
}
console.log(solveQuadratic());//{0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(...args){
    console.log(args)
 args.forEach((num,i)=>{
console.log(num)
    });
}
printArray(32,5,67,7);
//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime(){
    const now = new Date()
    const day = String(now.getDate()).padStart(2,'0');
    const month = String(now.getMonth()+1).padStart(2,'0');
    const year= now.getFullYear();
    const hours=String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'')
    return `${month}/${day}/${year} ${hours}:${minutes}`;
}
console.log(showDateTime()); //01/28/2025 17:38

//Declare a function name swapValues. This function swaps value of x to y.

function swapValues(a, b) {
    let temp= b;
    b=a;
a=temp;
return(`x=>${a},y=>${b}`)
}
console.log(swapValues(3,4))

//Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let userId = '';
    for(let i=0;i<7;i++){
        randomgen =Math.floor(Math.random()*characters.length);
        userId+=characters[randomgen]
    }
    return userId;
}
console.log(userIdGenerator())

//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(n){
if(n<0){
    console.log('factorial is not defined for negative numbers')
}
let result = 1;
for(let i=2;i<=n;i++){
    result*=i;
}
return result
}
console.log(factorial(3))