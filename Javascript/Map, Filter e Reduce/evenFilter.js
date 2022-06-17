function evenFilter(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const nums = [36,74,25,86,48,47,35];

console.log(evenFilter(nums));