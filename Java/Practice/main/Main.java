public class Main {
    public static void main(String[] args) {
        int num=34;
        float fl =4.56f;
        int co = (int)fl;
        System.out.println(co);
        int maxScore = 500;
        int userScore = 423;
        float percentage = (float) userScore / maxScore * 100.0f;
        System.out.println(percentage) ;
        //operator
        int ik=30;
        ik+=8;
        ik%=2;
        ik-=3;
        ik++;
        ik--;
        --ik;
        ++ik;

        System.out.println(ik+num);

        int x1 = 1;
        x1 <<= 95;//left shift operator
        x1>>=2;//right shift operator
        x1|=3;//OR operator
        System.out.println(x1);

        int z=3;
        int r=5;
        System.out.println(z==r);  // equal operator
System.out.println(!(z < 3 ||  z < 10));

        for (int i = 1; i <= 5; i++) {
            System.out.println("i = " + i);
        }
    }
}