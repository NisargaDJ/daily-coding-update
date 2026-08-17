//1. Find the largest element in an array
let arr = [12, 45, 7, 89, 10];
let largest = arr[0];
for(let i=0; i<arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}
console.log("largest element :", largest);


//2. Find the second largest element in an array
let arr = [12, 45, 7, 89, 10];
let largest = -Infinity;
let secondlargest = -Infinity;
for(let i=0; i<arr.length; i++){
    if(arr[i] > largest){
        secondlargest = largest;
        largest = arr[i];
    }
    else if(arr[i] > secondlargest && arr[i] !== largest){
        secondlargest = arr[i];
    }
}
console.log("largest element :", largest);
console.log("secondlargest :", secondlargest);


//3. Remove duplicate elements from an array
let arr = [1, 2, 3, 4, 2, 1, 5];
let unique = [];
for(let i=0; i<arr.length; i++){
    let isDuplicate = false;
    for(let j=0; j<unique.length; j++){
        if(arr[i] === unique[j]){
            isDuplicate = true;
            break;
        }
    }
    if(!isDuplicate){
        unique.push(arr[i]);
    }
}
console.log(unique);



//5. Find the missing number in an array of 1 to N
let arr = [1, 2, 4, 5];
let n = 5;
let expectedsum = (n * (n + 1))/ 2;
let actualsum = 0
for(let i=0; i<arr.length; i++){
    actualsum = actualsum + arr[i];
}
let missingNumber = expectedsum - actualsum;
console.log("missingNumber :", missingNumber);



// Find duplicate elements without built-in methods
let arr = [1, 2, 3, 2, 4, 5, 3, 2];
let duplicates = [];
let duplicateCount = 0;
for (let i = 0; i < arr.length; i++) {
    let alreadyAdded = false;
    // Check if this number was already stored as a duplicate
    for (let k = 0; k < duplicateCount; k++) {
        if (arr[i] === duplicates[k]) {
            alreadyAdded = true;
            break;
        }
    }
    // Search for the same number later in the array
    if (!alreadyAdded) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                duplicates[duplicateCount] = arr[i];
                duplicateCount++;
                break;
            }
        }
    }
}
console.log(duplicates); // [2, 3]
