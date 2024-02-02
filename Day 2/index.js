//Write a program that prints the first 10 multiples of a given number. If the number is negative or zero, print an error message.



function PrintMultiples() {
    if (number <= 0) {
        console.log("Error: Please enter a positive non-zero number.");
        return;
    }

    // Print the first 10 multiples of the given number
    console.log(`First 10 multiples of ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Example: Print the first 10 multiples of 8
PrintMultiples(8);
