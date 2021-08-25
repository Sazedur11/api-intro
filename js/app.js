// JSON means javascript object Notation

const shop = {
    name: 'Barkat super shop',
    address: 'Premnagar',
    income: 20000,
    products: {
        chini: '2kg',
        appel: '5kg',
        komola: 10,
    },
    wonner: 'Barkat Mia'
}
const shopStringified = JSON.stringify(shop);
const shopParse = JSON.parse(shopStringified);
// console.log(shop)
console.log(shopStringified)
console.log(shopParse)
// console.log(shopParse.wonner)


/* JSON.stringfy দিয়ে কোনও object কে string করা যাই।
JSON.parse দিয়ে কোন JSON.stringfy  কে Object করা যাই।
 */