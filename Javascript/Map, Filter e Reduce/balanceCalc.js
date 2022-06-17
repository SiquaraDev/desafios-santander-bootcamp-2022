const items = [
    {
        name: 'milk',
        price: 5,
    },
    {
        name: 'bread',
        price: 3,
    },
    {
        name: 'cheese',
        price: 8,
    },
    {
        name: 'juice',
        price: 4,
    },
    {
        name: 'sugar',
        price: 4,
    },
];

const balance = 100;

function balanceCalc(balance, items) {
    return items.reduce(function (prev, current) {
        return prev - current.price;
    }, balance);
}

console.log(balanceCalc(balance, items));
