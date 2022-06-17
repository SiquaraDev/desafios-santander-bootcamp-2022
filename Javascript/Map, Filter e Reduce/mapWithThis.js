const apple = {
    value: 2,
};

const orange = {
    value: 3,
};

function mapWithThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> apple', mapWithThis(nums, apple));
console.log('this -> orange', mapWithThis(nums, orange));