console.log('welcome to new txt')
console.log('Declare an empty array;')
const arr=[]
console.log(arr)
console.log('Declare an array with more than 5 number of elements')
const arr1=[4,5,6,7,8]
console.log(arr1)
console.log('Find the length of your array')
console.log(arr1.length)
console.log('Get the first item, the middle item and the last item of the array')
console.log('first')
console.log(arr1[0])
const last=(arr1.length)-1
console.log('last')
console.log(arr1[last])
const middle=last/2
console.log('middle')
console.log(arr1[middle])
console.log('Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5')
const mixedDataTypes = [3,4.6,'pravi',{are:['fdgv','fg']},['fsdf','fd','defe'],{dds:['efsd']}]
console.log('Mixed Data Types')
console.log(mixedDataTypes)
console.log('Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon')
const itcompanies = []
itcompanies[0]='Facebook';
itcompanies[1]='Google';
itcompanies[2]='Microsoft';
itcompanies[3]='Apple';
itcompanies[4]='IBM';
itcompanies[5]='Oracle';
itcompanies[6]='Amazon';
console.log(itcompanies)
console.log('Print the array using console.log()')
console.log(arr1)
console.log('Print the number of companies in the array')
console.log(itcompanies.length)
console.log('Print the first company, middle and last company')
console.log(itcompanies[0])
const lastcompany=itcompanies.length-1
console.log(itcompanies[lastcompany])
const middlecompany=lastcompany/2
console.log(itcompanies[middlecompany])
console.log('Print out each company')
itcompanies.forEach((company)=>{console.log(company);});
console.log('Change each company name to uppercase one by one and print them out')
itcompanies.forEach((company)=>{console.log(company.toUpperCase());})
console.log('Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.')
console.log(itcompanies.toString()+' are top 7 big IT companies')
console.log('Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found')
function checkcompany(){
return ('dsurew').includes(itcompanies)?'dsurew':'company is not found'
}
console.log(checkcompany())
console.log('Filter out companies which have more than one o without the filter method')
let count=0;
let fliteredCompanies=[];
for (let i=0;i<itcompanies.length;i++){
count=0;
let lowerletter=itcompanies[i].toLowerCase()
let splitone=lowerletter.split('')
for(j=0;j<splitone.length;j++){
if(splitone[j]=='o'){
count++;
}
}
if(count>1){
fliteredCompanies.push(itcompanies[i]);
}
}
console.log(fliteredCompanies)

console.log('Sort the array using sort() method')
console.log(itcompanies.sort())
console.log('Reverse the array using reverse() method')
console.log(itcompanies.reverse())
console.log('Slice out the first 3 companies from the array')
console.log(itcompanies.slice(0,3))
console.log('Slice out the last 3 companies from the array')
console.log(itcompanies.slice(itcompanies.length-3,itcompanies.length))
console.log('Slice out the middle IT company or companies from the array')
console.log(itcompanies.slice(itcompanies.length/2,itcompanies.length/2+1))

console.log('Remove the first IT company from the array')
console.log(itcompanies.splice(0,1))
console.log('Remove the middle IT company or companies from the array')
console.log(itcompanies.length/2)
const middle1=itcompanies.length/2
console.log(itcompanies.splice(middle1,1))

console.log('Remove the last IT company from the array')
console.log(itcompanies.splice(itcompanies.length-1,1))
console.log('Remove all IT companies')
console.log(itcompanies.splice(0,itcompanies.length))

