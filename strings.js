//1. Reverse a string without using reverse()
let str = "Nisarga";
let reversed = "";
for(let i=str.length-1; i>=0; i--){
    reversed = reversed + str[i];
}
console.log(reversed);


//2. Check if a string is a palindrome
let str = "madam";
let isPalindrome = true;
for(let i=0; i<str.length/2; i++){
    if(str[i] !== str[str.length-1-i]){
        isPalindrome = false;
        break;
    }
}
if(isPalindrome){
    console.log("Palindrome");
}else{
    console.log("Not palindrome");
}


//3. Find the first non-repeating character in a string
let str = "aabbcdde";
let count = {};
// Step 1: Count each character
for(let i=0; i<str.length; i++){
    let ch = str[i];
    if(count[ch]){
        count[ch]++
    }else{
        count[ch] = 1
    }
}
// Step 2: Find the first non-repeating character
let found = false;
for(let i=0; i<str.length; i++){
    if(count[str[i]] === 1){
        console.log(str[i]);
        found =  true;
        break;
    }
}
if(!found){
    console.log("No non-repeating character")
}


//4. Find the first two non-repeating character in a string
let str = "aabbcddefg";
let count = {};
// Count the frequency of each character
for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (count[ch]) {
        count[ch]++;
    } else {
        count[ch] = 1;
    }
}
let found = 0;
// Find the first 2 non-repeating characters
for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
        console.log(str[i]);
        found++;
        if (found === 2) {
            break;
        }
    }
}
if (found === 0) {
    console.log("No non-repeating characters");
}


//5. Count the occurrence of each character in a string
let str = "banana";
let count = {};
for(let i=0; i<str.length; i++){
    let ch = str[i];
    if(count[ch]){
        count[ch]++
    }else{
        count[ch] = 1
    }
}
for(let key in count){
    console.log(key + "=" +count[key]);
}


//Check whether two strings are anagrams
let str1 = "listen";
let str2 = "silent";
if (str1.length !== str2.length) {
    console.log("Not Anagram");
} else {
    let count = {};
    // Count characters of first string
    for (let i = 0; i < str1.length; i++) {
        let ch = str1[i];
        if (count[ch]) {
            count[ch]++;
        } else {
            count[ch] = 1;
        }
    }
    // Remove characters using second string
    let isAnagram = true;
    for (let i = 0; i < str2.length; i++) {
        let ch = str2[i];
        if (!count[ch]) {
            isAnagram = false;
            break;
        }
        count[ch]--;
    }
    if (isAnagram) {
        console.log("Anagram");
    } else {
        console.log("Not Anagram");
    }
}