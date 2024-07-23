function Palindrome(word) {
    const lowerCaseWord = word.toLowerCase();
    const reversedWord = lowerCaseWord.split('').reverse().join('');
    if (lowerCaseWord === reversedWord) {
        return "it's a palindrome";
    } else {
        return "it is not a palindrome";
    }
}


console.log(Palindrome("racecar"));
console.log(Palindrome("mum"));     
console.log(Palindrome("noono"));  
console.log(Palindrome("hello")); 
