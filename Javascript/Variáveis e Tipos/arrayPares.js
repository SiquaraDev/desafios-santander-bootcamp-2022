function substituiPares(array) {

    if (!array || array.length === 0) return -1;

    for (let i = 0; i < array.length; i++) {

        if (!(array[i] % 2) && array[i] !== 0) {
            array[i] = 0;
        };
    };

    return array;
};


console.log(substituiPares([]));
console.log(substituiPares([1,2,3,4,5,6,7,8,9,10]));
console.log(substituiPares(null));
console.log(substituiPares(undefined));
console.log(substituiPares([54,76,53,86,35,13,45,68,80,35,46]));