//1. Implement a delay(ms) function using Promises.
function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, ms);
    });
}

delay(2000).then(function() {
    console.log("2 seconds completed");
});



//2. Implement a custom Promise.all().
function myPromiseAll(promises) {
    return new Promise(function(resolve, reject) {

        let results = [];
        let completed = 0;

        if (promises.length === 0) {
            resolve(results);
            return;
        }

        for (let i = 0; i < promises.length; i++) {

            promises[i]
                .then(function(value) {
                    results[i] = value;
                    completed++;

                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch(function(error) {
                    reject(error);
                });
        }
    });
}

let p1 = Promise.resolve("Apple");
let p2 = Promise.resolve("Banana");
let p3 = Promise.resolve("Mango");

myPromiseAll([p1, p2, p3])
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });



//3. Implement a custom Promise.race().
function myPromiseRace(promises) {
    return new Promise(function(resolve, reject) {

        for (let i = 0; i < promises.length; i++) {

            promises[i]
                .then(function(value) {
                    resolve(value);
                })
                .catch(function(error) {
                    reject(error);
                });
        }
    });
}

let p1 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("First");
    }, 3000);
});

let p2 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Second");
    }, 1000);
});

let p3 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Third");
    }, 2000);
});

myPromiseRace([p1, p2, p3])
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });



//4. Execute asynchronous tasks sequentially.
function task1() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Task 1 completed");
            resolve();
        }, 2000);
    });
}

function task2() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Task 2 completed");
            resolve();
        }, 1000);
    });
}

function task3() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Task 3 completed");
            resolve();
        }, 1500);
    });
}

async function executeTasks() {
    await task1();
    await task2();
    await task3();
}

executeTasks();



//5. Retry an API call up to 3 times if it fails.
function apiCall() {
    return new Promise(function(resolve, reject) {
        let success = false;

        setTimeout(function() {
            if (success) {
                resolve("API call successful");
            } else {
                reject("API call failed");
            }
        }, 1000);
    });
}

async function retryApiCall() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            let result = await apiCall();
            console.log(result);
            return;
        } catch (error) {
            console.log("Attempt " + attempt + " failed");

            if (attempt === 3) {
                console.log("API call failed after 3 attempts");
            }
        }
    }
}

retryApiCall();
