/*
Implement a function called countUniqueValues, which accepts a sorted array, 
and counts the unique values in the array. There can be negative numbers 
in the array, but it will always be sorted.

without changing the original array
*/

let previousValue = "";

const countUniqueValues = (arr) =>{
    if(arr.length === 0){
        return console.log(arr.length);
    }else if(arr.length === 1){
        return console.log(arr.length);
    }
    
    previousValue = arr[0];

    let i = 1;
    for( let j = 1; j < arr.length; ++j){
        if(arr[j] != previousValue){
            ++i;
            previousValue = arr[j];
        }
    }
   return console.log(i);
}
 ////Time Complexity - O(N)
//test cases
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4