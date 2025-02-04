```javascript
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
}

const items = [
  { price: 10, quantity: 2 },
  { price: 5, quantity: 5 },
  { price: 20, quantity: 1 },
];

const total = calculateTotal(items);
console.log(total); // Output: 65
```