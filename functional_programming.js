//1. Implement your own map().
function myMap(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i], i, arr);
    }

    return result;
}

let numbers = [1, 2, 3, 4, 5];

let doubled = myMap(numbers, function(num) {
    return num * 2;
});

console.log(doubled);



2. Implement your own filter().
function myFilter(arr, callback) {
    let result = [];
    let resultIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result[resultIndex] = arr[i];
            resultIndex++;
        }
    }

    return result;
}

let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = myFilter(numbers, function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers);



//3. Implement your own reduce().
function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
}

let numbers = [1, 2, 3, 4, 5];

let sum = myReduce(numbers, function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);



//4. Implement your own forEach().
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

let numbers = [10, 20, 30, 40];

myForEach(numbers, function(value, index) {
    console.log("Index:", index, "Value:", value);
});



//5. Implement a once() function that executes only once.
function once(callback) {
    let executed = false;

    return function() {
        if (!executed) {
            executed = true;
            return callback();
        }
    };
}

function greet() {
    console.log("Hello!");
}

let runOnce = once(greet);

runOnce();
runOnce();
runOnce();