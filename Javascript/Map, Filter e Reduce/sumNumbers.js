function sumNumbers(arr) {
    return arr.reduce(function (prev, current) {
        return prev + current;
    });
}

const nums = [1, 2, 5];

console.log(sumNumbers(nums));
