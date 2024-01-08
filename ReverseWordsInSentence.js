import java.util.Scanner;

public class ReverseWordsInSentence {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence: ");
        String input = scanner.nextLine();
        scanner.close();

        String reversedSentence = reverseWords(input);

        System.out.println("Reversed sentence: " + reversedSentence);
    }

    public static String reverseWords(String sentence) {
        String[] words = sentence.split(" ");
        StringBuilder reversedSentence = new StringBuilder();

        for (int i = 0; i < words.length; i++) {
            String word = words[i];
            String reversedWord = reverseString(word);
            reversedSentence.append(reversedWord);

            if (i < words.length - 1) {
                reversedSentence.append(" ");
            }
        }

        return reversedSentence.toString();
    }

    public static String reverseString(String str) {
        StringBuilder reversed = new StringBuilder(str);
        return reversed.reverse().toString();
    }
}
