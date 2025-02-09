console.log('Class')
//empty class
class Person{
}
const person1= new Person();
console.log(person1)//Person {}
//class constructor
class Person1{
    constructor(fname,lname){
        this.FName=fname;
        this.LName=lname;

    }
}
const person2=new Person1('pravi','pala');
const person3=new Person1('lohi','regalla')
console.log(person2)//Person1 {FName: 'pravi', LName: 'pala'}
console.log(person3)//Person1 {FName: 'likki', LName: 'naguluri'}

//adding methods to a class
class Person2{
    constructor(fname,lname){
        this.fname1=fname
        this.lname1=lname
    }
    getFullName(){
        return `${this.fname1}${this.lname1}`
    }
}
const person4= new Person2('sam','vankadari')
console.log(person4.getFullName())//samvankadari

//default values in constructor
class Person3{
    constructor(fname='ashritha',lname='gudeti'){
        this.fname2=fname
        this.lname2=lname
    }
}
const person5=new Person3()
console.log(person5)//Person3 {fname2: 'ashritha', lname2: 'gudeti'}
console.log(person5.fname2)//ashritha

//getter & setter
class Person4{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    get getAge(){
        return this.age
    }
    set setAge(newAge){
        this.age=newAge
    }
}
const person6=new Person4('pravi',24)
console.log(person6.getAge)//24
person6.setAge=28
console.log(person6.getAge)//28
//static methods
class Math1{
   static add(x,y){
        return x+y;
    }
}
console.log(Math1.add(2,4)) //without creating an instance like const b= new ClassName

//class inheritance
class Animal{
     constructor(name){
        this.name=name
     }
     makeSound(){
        return `${this.name} makes a sound.`;
     }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed=breed

    }
    bark(){
        return `${this.name} barks!`;
    }
}
const dog=new Dog('Boo','Labrador');
console.log(dog.makeSound()); //Boo makes a sound.
console.log(dog.bark()) //Boo barks!
//Overriding parent method
class Animal1{
    makeSound(){
        return `make sound`
    }
}
class Dog1{
makeSound(){
    return `boow boow`
}
}
const dog1=new Dog1()
console.log(dog1.makeSound())//boow boow
//Full Class Implementation
class Person7{
    constructor(name,age){
this.myName=name
this.myAge=AggregateError
    }
    getFullname(){
        return `my full name is ${this.myName}`
    }
}
class Student extends Person7{
    constructor(name,age,id,major){
        super(name,age)
this.id=id
this.major=major
}
introduce(){
    return `my id is ${this.id} and my major is ${this.major}`
}
}
const student=new Student('Pravigna',24,328494,'CS')
console.log(student.getFullname())//my full name is Pravigna
console.log(student.introduce())//my id is 328494 and my major is CS

//Example 
/**Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// you output should look like this
console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]**/

class Statistics{
    constructor(data){
        this.data=data.sort((a,b)=>a-b);
    }
    count(){
        return this.data.length
reth
    }
    sum(){
return this.data.reduce((a,b)=>a+b,0)
    }
    min() {
        let mini=Math.min(...this.data)
        return mini;  // ✅ Use spread operator
    }
    max(){
        return Math.max(...this.data)
    }
    range(){
        return this.max()-this.min()
    }
    mean(){
        return (this.sum()/this.count()).toFixed(2)
    }
    median(){
       const mid =Math.floor(this.count()/2);
       if(mid%2===0){
return ((this.data[mid-1]+this.data[mid])/2).toFixed(2)
       }else{
return this.data[mid]
       }
    }
    mode(){
        let freqMap={}
            this.data.forEach((num)=>freqMap[num]=(freqMap[num]||0)+1)
            let maxFreq=0
            let mode=null
            for(let freq in freqMap){
                if(freqMap[freq]>maxFreq){
                    maxFreq=freqMap[freq];
                    mode=Number(freq);
                }
            }
            return `(${mode}, ${maxFreq})`;
    }
    variance(){
        let mean=this.mean()
    let variance=this.data.reduce((acc,num)=> acc+=Math.pow(mean-num,2),0)/this.count()
    return variance.toFixed(2)
    }
    std(){
        return Math.sqrt(this.variance()).toFixed(2)
    }
    freqDist(){
        let freqMap={}
        this.data.forEach((num)=>freqMap[num]=(freqMap[num]||0)+1)
        const freqArray=Object.entries(freqMap).map(([num,freq])=>[parseFloat((freq/this.count()*100).toFixed(2)),Number(num)]).sort((a,b)=>b[0]-a[0])
        return freqArray
    }
    describe(){
        return `
        Count:${this.count()}
        Sum:  ${this.sum()}
        Min:  ${this.min()}
        Max:  ${this.max()}
        Range:  ${this.range()}
        Mean:  ${this.mean()}
        Median:  ${this.median()}
        Mode:  ${this.mode()}
        Variance:  ${this.variance()}
        Standard Deviation:  ${this.std()}
        Frequency Distribution: ${JSON.stringify(this.freqDist())}`
    }
}
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics= new Statistics(ages)
console.log(statistics.describe())