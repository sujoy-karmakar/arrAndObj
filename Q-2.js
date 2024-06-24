//2- the following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sortedArray = ages.sort()
console.log(sortedArray);
// find min
let findMin = Math.min(...ages)
console.log("Min value", findMin);
//find max
let findMax = Math.max(...ages)
console.log("max value", findMax);



// find median
const mid = Math.floor((sortedArray.length - 1) / 2);
let median;
if (sortedArray.length % 2 === 1) {
    // Array length is odd
    median = sortedArray[mid];
} else {
    // Array length is even
    median = (sortedArray[mid] + sortedArray[mid + 1]) / 2;
}

console.log("Median:", median);

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//find average age (all items divided by number of item)
const sumOfAges = ages.reduce((total, age) => total + age, 0)
//avaageAge 
const avarageAge = Math.floor(sumOfAges / ages.length);
console.log(avarageAge);



//find the range of the ages(max minus min)
let minAge = Math.min(...ages)
let maxAge = Math.max(...ages)
console.log("Minimum Age:", minAge);
console.log("Maximum Age:", maxAge);
let rangeAge = (maxAge - minAge)
console.log("Range of Ages:", rangeAge);

//compate the value or (min-average) and (max-average), use abs() method

let absDifferenceMin = Math.abs((minAge - avarageAge));
console.log(absDifferenceMin);
let absDifferenceMax = (Math.abs(maxAge - avarageAge));
console.log(absDifferenceMax);
if (absDifferenceMin < absDifferenceMax) {
    console.log(" (Min Age - Average Age) is smaller.");
}
if (absDifferenceMin > absDifferenceMax) {
    console.log(" (Max Age - Average Age) is smaller. .");
}
else {
    console.log("differences are equal");
}