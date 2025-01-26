import java.util.Arrays;

public class arrays {

    public static void main(String[] args){
        String[] names={"sam","likki","pinky","ammu","chinni"};
        //access the array element
        System.out.println("nickname of Samyuktha:"+names[0]);//nickname of Samyuktha:sam
        //change an array element
        names[4]="pala";
        System.out.println("change nickname of Pravigna:"+names[4]); //change nickname of Pravigna:pala

        //length of array
        System.out.println("no of roommates:"+names.length); //no of roommates:5
        //loop through an array
        for(int n=0;n<names.length;n++) {
            System.out.println("roommate no "+(n+1)+" nickname:" + names[n]);
        }
        //foreach
        for(String i: names){
            System.out.print(" "+i); // sam likki pinky ammu pala
        }
        //example
        int ages[]={24,23,23,23,24};
        int sum,lengths;
        sum=0;
       for(int age:ages){
            sum+=age;
        }
        System.out.println(" average age of roommates:"+(sum/ages.length)); // average age of roommates:23
        //Multidimensional Arrays
        int[][] matr={{2,3,4},{4,5,6,7}};
        System.out.println("matrix "+matr);//will concatenate the string "matrix " with the result of calling toString() on the matr array object. For arrays, toString() returns a string representation of the memory address (e.g., [I@4fca772d), which is not human-readable.
        System.out.println(Arrays.deepToString(matr)); //[[2, 3, 4], [4, 5, 6, 7]]
        //accessing the element
        System.out.println(matr[0][0]); //2
        //change the element
        matr[0][2]=9;
        System.out.println(matr[0][2]); //9
        //loop through a array
        for(int i=0;i<matr.length;++i){
            for(int j=0;j<matr[i].length;++j){
                System.out.println(matr[i][j]);
            }
        }
        // foreach loop
        System.out.println("forEach");
        for(int[] row:matr){
            for(int i:row){
                System.out.println(i);
            }
        }

    }
}
