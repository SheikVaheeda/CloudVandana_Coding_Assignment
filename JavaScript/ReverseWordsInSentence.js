// Function to reverse every word in a sentence
function reverseWordsInSentence(sentence) {
    // Split the sentence into words using space as the delimiter
    let words = sentence.split(' ');

    // Reverse each word and store them in a new array
    let reversedWords = words.map(word => {
        // Use split and reverse to reverse the characters in each word
        return word.split('').reverse().join('');
    });

    // Join the reversed words back into a sentence
    let reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

// Get input from the user
const inputSentence = prompt("Enter a sentence:");

// Check if the user provided input
if (inputSentence !== null && inputSentence.trim() !== "") {
    // Call the function to reverse the words and display the result
    const reversedSentence = reverseWordsInSentence(inputSentence);
    console.log("Reversed Sentence: " + reversedSentence);
} else {
    console.log("No input provided. Please enter a sentence.");
}
