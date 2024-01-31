import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Main {
    public static void period_id_check(String period_id) {
        HashMap<Integer, String> Months = new HashMap<>();
        Months.put(1, "JAN");
        Months.put(2, "FEB");
        Months.put(3, "MAR");
        Months.put(4, "APR");
        Months.put(5, "MAY");
        Months.put(6, "JUN");
        Months.put(7, "JUL");
        Months.put(8, "AUG");
        Months.put(9, "SEP");
        Months.put(10, "OCT");
        Months.put(11, "NOV");
        Months.put(12, "DEC");
        String[] per_id = period_id.split(" ");
        if(per_id.length == 2) {
            if(!Months.containsValue(per_id[0].toUpperCase())){
                System.out.println(Months.get(per_id[0]));
            }
        }
    }
    public static void main(String[] args) {
        System.out.println("Hello world!");
        period_id_check("Apr 17");
    }
}