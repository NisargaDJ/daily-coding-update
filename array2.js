//6. Find the intersection of two arrays
function findIntersection(arr1, arr2) {
  const intersection = [];
    for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        // Prevent duplicate values in the result
        let alreadyAdded = false;
        for (let k = 0; k < intersection.length; k++) {
          if (intersection[k] === arr1[i]) {
            alreadyAdded = true;
            break;
          }
        }
        if (!alreadyAdded) {
          intersection[intersection.length] = arr1[i];
        }
        break;
      }
    }
  }
    return intersection;
}
const array1 = [1, 2, 3, 4, 2];
const array2 = [2, 4, 6, 2];
console.log(findIntersection(array1, array2)); // [2, 4]

//Find the union of two arrays.
// Find union of two arrays without built-in methods
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let union = [];
let count = 0;
// Add unique elements from both arrays
for (let i = 0; i < arr1.length + arr2.length; i++) {
    let value;
    if (i < arr1.length) {
        value = arr1[i];
    } else {
        value = arr2[i - arr1.length];
    }
    let exists = false;
    for (let j = 0; j < count; j++) {
        if (union[j] === value) {
            exists = true;
            break;
        }
    }
    if (!exists) {
        union[count] = value;
        count++;
    }
}
console.log(union); // [1, 2, 3, 4, 5, 6]





//Move all zeros to the end of an array.
// Move all zeros to the end without built-in methods
let arr = [0, 1, 0, 3, 12, 0, 5];
let result = [];
let index = 0;
// Add non-zero elements first
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        result[index] = arr[i];
        index++;
    }
}
// Add zeros at the end
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        result[index] = arr[i];
        index++;
    }
}
console.log(result); // [1, 3, 12, 5, 0, 0, 0]


