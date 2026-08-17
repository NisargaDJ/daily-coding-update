//1. Deep clone an object
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    const clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        clone[key] = deepClone(obj[key]);
    }
    return clone;
}
const person = {
    name: "Nisarga",
    age: 23,
    address: {
        city: "Bangalore",
        pincode: 560001
    }
};
const copy = deepClone(person);
console.log(copy);


//2. Compare two objects for deep equality
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    if (obj1 === null || obj2 === null ||
        typeof obj1 !== "object" || typeof obj2 !== "object") {
        return false;
    }
    let count1 = 0;
    let count2 = 0;
    for (let key in obj1) {
        count1++;
    }
    for (let key in obj2) {
        count2++;
    }
    if (count1 !== count2) {
        return false;
    }
    for (let key in obj1) {
        let exists = false;
        for (let key2 in obj2) {
            if (key === key2) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            return false;
        }
        if (!deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}
const obj1 = {
    name: "Nisarga",
    age: 23,
    address: {
        city: "Bangalore"
    }
};
const obj2 = {
    name: "Nisarga",
    age: 23,
    address: {
        city: "Bangalore"
    }
};
console.log(deepEqual(obj1, obj2));


//3. Group an array of objects by a property.
function groupBy(arr, property) {
    const result = {};
    for (let i = 0; i < arr.length; i++) {
        const key = arr[i][property];
        if (result[key] === undefined) {
            result[key] = [];
        }
        result[key][result[key].length] = arr[i];
    }
    return result;
}
const students = [
    { name: "A", department: "CSE" },
    { name: "B", department: "ECE" },
    { name: "C", department: "CSE" },
    { name: "D", department: "ME" }
];
console.log(groupBy(students, "department"));


//4. Convert an object into an array of key-value pairs.
function objectToPairs(obj) {
    const result = [];
    for (let key in obj) {
        result[result.length] = [key, obj[key]];
    }
    return result;
}
const person = {
    name: "Nisarga",
    age: 23,
    city: "Bangalore"
};
console.log(objectToPairs(person));


//5. Merge multiple objects recursively.
function mergeObjects(obj1, obj2) {
    const result = {};
    // Copy obj1
    for (let key in obj1) {
        result[key] = obj1[key];
    }
    // Merge obj2
    for (let key in obj2) {
        // If both values are objects, merge recursively
        if (
            result[key] !== null &&
            typeof result[key] === "object" &&
            obj2[key] !== null &&
            typeof obj2[key] === "object"
        ) {
            result[key] = mergeObjects(result[key], obj2[key]);
        } else {
            result[key] = obj2[key];
        }
    }
    return result;
}
function mergeMultipleObjects() {
    const result = {};
    for (let i = 0; i < arguments.length; i++) {
        const merged = mergeObjects(result, arguments[i]);
        for (let key in merged) {
            result[key] = merged[key];
        }
    }
    return result;
}
const obj1 = {
    name: "Nisarga",
    address: {
        city: "Bangalore"
    }
};
const obj2 = {
    age: 23,
    address: {
        pincode: 560001
    }
};
const obj3 = {
    course: "Java",
    address: {
        state: "Karnataka"
    }
};
console.log(mergeMultipleObjects(obj1, obj2, obj3));