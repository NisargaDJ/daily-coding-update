//Find the longest word in a sentence
function longestWord(sentence) {
    let word = "";
    let longest = "";
    for (let i = 0; i <= sentence.length; i++) {
        if (sentence[i] !== " " && i !== sentence.length) {
            word += sentence[i];
        } else {
            if (word.length > longest.length) {
                longest = word;
            }
            word = "";
        }
    }
    return longest;
}
console.log(longestWord("I love JavaScript programming"));


//Reverse the words in a sentence
function reverseWords(sentence) {
    let word = "";
    let result = "";
    for (let i = 0; i <= sentence.length; i++) {
        if (sentence[i] !== " " && i !== sentence.length) {
            word += sentence[i];
        } else {
            if (result === "") {
                result = word;
            } else {
                result = word + " " + result;
            }
            word = "";
        }
    }
    return result;
}
console.log(reverseWords("I love JavaScript"));


//Compress a string (e.g., "aaabbc" → "a3b2c1")
function compressString(str) {
    let result = "";
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += str[i] + count;
            count = 1;
        }
    }
    return result;
}
console.log(compressString("aaabbc"));


//Find the longest substring without repeating characters
function longestSubstring(str) {
    let current = "";
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        while (current.includes(str[i])) {
            current = current.slice(1);
        }
        current += str[i];

        if (current.length > max) {
            max = current.length;
        }
    }
    return max;
}
console.log(longestSubstring("abcabcbb"));


//Check whether one string is a rotation of another
function checkRotation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let combined = str1 + str1;
    return combined.includes(str2);
}
console.log(checkRotation("waterbottle", "erbottlewat"));


