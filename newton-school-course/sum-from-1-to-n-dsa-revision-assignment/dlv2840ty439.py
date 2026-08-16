import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

class Main {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        
        // Sum using formula: n * (n + 1) / 2
        int sum = n * (n + 1) / 2;
        
        System.out.println(sum);
    }
}