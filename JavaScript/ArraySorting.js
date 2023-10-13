// Get input from the user
const input = prompt("Enter a list of numbers separated by spaces:");

// Check if the user provided input
if (input !== null && input.trim() !== "") {
    // Split the input string into an array of numbers
    const numbers = input.split(' ').map(Number);

    // Sort the array in descending order
    numbers.sort(function(a, b) {
        return b - a; // Compare b to a for descending order
    });

    console.log("Sorted Array in Descending Order:", numbers);
} else {
    console.log("No input provided. Please enter a list of numbers separated by spaces.");
}
