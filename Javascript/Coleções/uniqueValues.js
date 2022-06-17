const MY_ARRAY = [30, 20, 50, 30, 40, 20, 20, 50, 10, 30];

function uniqueValues(arr) {
    const MY_SET = new Set(arr);

    return [...MY_SET];
}

console.log(uniqueValues(MY_ARRAY));