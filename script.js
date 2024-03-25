function firstChar(str) {
  // your code here
	str = str.trim();
    
    // Check if the trimmed string is empty
    if (str === '') {
        return '';
    }
    
    // Iterate through each character of the trimmed string
    for (let char of str) {
        // If the character is not a space, return it
        if (char !== ' ') {
            return char;
        }
    }
    
    // If all characters are spaces, return an empty string
    return '';
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
