const REGULAR_CATEGORY =  "regular";
const INCREASED_CATEGORY = "increased";
const SPECIAL_CATEGORY = "special";

const purchases = [
{
    amont:1000,
    category: REGULAR_CATEGORY,
},

{
    amont:1000,
    category:INCREASED_CATEGORY,
},

{
    amont:3000,
    category: SPECIAL_CATEGORY,
},
];

let cashback = 0;
let sum = 0;

for (const purchase of purchases) {
    sum+=purchase.amont;
    cashback = sum / 100;
}

console.log(cashback);