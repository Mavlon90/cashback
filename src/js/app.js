const REGULAR_CATEGORY =  "regular";
const INCREASED_CATEGORY = "increased";
const SPECIAL_CATEGORY = "special";

const purchases = [
{amount:30000, percent:0.01, category:REGULAR_CATEGORY},
{amount:10000, percent:0.05, category:INCREASED_CATEGORY},
{amount:30000, percent:0.3, category: SPECIAL_CATEGORY},
];

let cashback = 0;
let sum = 0;

for (const purchase of purchases) {
    cashback = purchase.amount * purchase.percent;
    sum += cashback;
    //console.log(sum);
}
    const cashbackLimit = 3000;
if (cashback > cashbackLimit) {
    cashback = cashbackLimit;
}

console.log(cashback);
