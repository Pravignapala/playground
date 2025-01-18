public class StringMethods {
    public static void main(String[] args){
        String name="Pravigna ";
        String last_name="Pala";
        System.out.println("hello I'm "+name); //hello I'm Pravigna
        // here we go to String methods
        //concat method
        System.out.println("concat Method "+name.concat(last_name)); //concat Method Pravigna Pala
        System.out.println('4'+"354"); // 4354
        // slash
        System.out.println("I\'m \"PRAVIGNA PALA\"\\\"PRAVI\""); //I'm "PRAVIGNA PALA"\"PRAVI"
        //\n new line\r carriege return \t tab \b backspace \f form feed
        System.out.println("hello\n good right\r give tab \t  backspace means \b what is form feed \f");
        //hello
        //give tab 	  backspace means what is form feed
        //math operators
        //gives the maximum
        System.out.println(Math.max(5,10)); //10
        //gives the minimum
        System.out.println(Math.min(5,10)); //5
        // gives the square root
        System.out.println(Math.sqrt(64)); //8
        //absolute positive
        System.out.println(Math.abs(-4.8)); //4.8
        // give random numbers between 0.0 and 1.0
        System.out.println(Math.random()); //0.042795156535724854
        //if you want between 0 and 100
        int randomNum=(int)(Math.random()*101); //29
        System.out.println(randomNum);
        //comparison :
        int  x,y;
        x=y=10;
        System.out.println(x>=y); //true
        // if...else condition
        if(x>=y){
            System.out.println("if condtion");// if condition
        }
        //if...else condition
        int z=13;
        if(z<10){
            System.out.println("if condition is true ");
        }else {
            System.out.println("if condition is false"); //if condition is false
        }
        //else..if condition
        int x1=18;
        if(x1<10){
            System.out.println("best");
        }else if(x1<12){
            System.out.println("good");
        }else{
            System.out.println("okay"); //okay
        }
        //ternary operator
        String result = (x1>10)?"good day":"best day";
        System.out.println("ternary operator "+result);//ternary operator good day
        //switch
        String day="saturday";
        switch(day){
            case "monday":
                System.out.println("first case");
                break;
            case "tuesday":
                System.out.println("second case");
                break;
            case "saturday":
                System.out.println("third case"); //third case
                break;
            default:
                System.out.println("default statement");
        }
        //while loop
        int i=0;
        while(i<4){
            System.out.println("i is "+i); //i is 0 i is 1 i is 2 i is 3
            i++;
        }
        //Do while
        do{
            System.out.println("this in do loop "+i); //this in do loop 4 this in do loop 5
            i++;
        }while(i<6);
        //for loop
        for(int i1=0;i1<5;i1++){
            System.out.println("for loop"+i1);//for loop0 for loop1 for loop2 for loop3 for loop4
        }
        //nested loop
        for(int out=0;out<2;out++){
            System.out.println("outer loop"+out);
            for(int in=1;in<3;in++){
                System.out.println("inner loop"+in);
            }
        }
        //for each loop
        String[] car={"volve","bmw","swift"};
        for(String c:car){
            System.out.println("car name is :"+c);
        }
        //break/ continue
        for(int b=0;b<6;b++){
            if(b==4){
                break;
            }
            System.out.println("break"+b);
        }
        for(int c=0;c<6;c++){
            if(c==4){
                continue;
            }
            System.out.println("continue"+c);
        }
    }
}
