
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ArrayShuffling {
    public static void main(String[] args) {
        int arr[] = {1,2,3,4,5,6,7};
       
        List<Integer> arrayList = new ArrayList<>();
        arrayList.add(1);
        arrayList.add(2);
        arrayList.add(3);
        arrayList.add(4);
        arrayList.add(5);
        arrayList.add(6);
        arrayList.add(7);

        
        Collections.shuffle(arrayList);

       
        for (Integer value : arrayList) {
            System.out.print(value + " ");
        }
    }
}
