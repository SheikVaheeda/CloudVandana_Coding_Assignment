import java.util.HashSet;
import java.util.Scanner;

public class PangramChecker {
    public static boolean isPangram(String str) {
        // Create a set to store the unique characters in the string
        HashSet<Character> charSet = new HashSet<>();
        
        // Remove spaces and convert the string to lowercase
        str = str.replaceAll("\\s", "").toLowerCase();
        
        // Iterate through the string and add characters to the set
        for (char c : str.toCharArray()) {
            if (Character.isLetter(c)) {
                charSet.add(c);
            }
        }
        
        // Check if the set contains all 26 letters of the alphabet
        return charSet.size() == 26;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine();
        scanner.close();

        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}
