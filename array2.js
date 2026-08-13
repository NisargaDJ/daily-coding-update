// //6. Find the intersection of two arrays
// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];
// let result = [];
// let k = 0;
// for(let i=0; i<arr1.length; i++){
//     for(let j=0; j<arr2.length; j++){
//         if(arr1[i] === arr2[j]){
//             result[k] = arr1[i];
//             k++
//         }
//     }
// }
// console.log(result);


let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let result = [];
let k = 0;
for(let i=0; i<arr1.length; i++){
    result[k] = arr1[i];
    k++;
}
for(let i=0; i<arr2.length; i++ ){
    let found = false;
    for(let j=0; j<result.length; j++){
        if(arr2[i] === result[j]){
        found = true;
        break;
        }
    }

        if(found = false){
        result[k] = arr2[i];
        k++;
        }
}
console.log(result);
