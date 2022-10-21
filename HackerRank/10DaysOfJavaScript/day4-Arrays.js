/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    const setNums = new Set(nums.sort((x,y) => x-y));
    const numsArray = Array.from(setNums);
    return numsArray[numsArray.length - 2];
}

console.log(getSecondLargest([2,2,2,3,4,5,6,6]));