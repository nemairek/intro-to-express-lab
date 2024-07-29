const express = require('express');

const app = express()

app.listen(3000, () => {
    console.log('Listening on port 3000')
  })


  

// app.get('/greetings/:name', (req, res) => {
//         res.send(`<h1>Hello there, ${req.params.name}<h1>`);
// });




// app.get('/roll/:number', (req, res) => {
//    const number = req.params.number
//    const max = number
//    const min = 0
//    const rolledAmt = Math.floor(Math.random(number) * (max - min + 1)) + min;
//    console.log(number)
//    if ( isNaN(number) ){
//      res.send('You must specify a number')
//     } else {
//       res.send(`<h1>You rolled a ${rolledAmt}<h1>`);
//     }
// });



// app.get('/collectibles/:number', (req, res) => {
//   const collectibles = [
//     { name: 'shiny ball', price: 5.95 },
//     { name: 'autographed picture of a dog', price: 10 },
//     { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
//   ];
//   const number = req.params.number
//   let index = collectibles[number]
//   let length = collectibles.length
//   console.log(number)
//   console.log(index)
//   console.log(length)
//    const name = index.name
//    const price = index.price

//    if (index >= collectibles.length) {
//     res.send(`Item is not found.`);
//     return;
//   } else  res.send(`You can have this pristine, ${name} for the low price of ${price}$`)
    
// })


app.get('/shoes', (req, res) => {
  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];
const number = req.params.number
let index = shoes[number]
console.log(number)
console.log(index)
// let name = index.name
// let price = index.price
// console.log(shoes)


      res.send(shoes)
})
