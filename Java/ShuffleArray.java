import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ShuffleArray {
    public static void main(String[] args) {
        // Create a list with the values
        List<Integer> originalList = new ArrayList<>();
        originalList.add(1);
        originalList.add(2);
        originalList.add(3);
        originalList.add(4);
        originalList.add(5);
        originalList.add(6);
        originalList.add(7);

        // Shuffle the list
        Collections.shuffle(originalList);

        // Convert the list back to an array
        Integer[] shuffledArray = originalList.toArray(new Integer[originalList.size()]);

        // Print the shuffled array
        for (int value : shuffledArray) {
            System.out.print(value + " ");
        }
    }
}
