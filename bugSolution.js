```javascript
function calculateTotal(items) {
  if (!items || items.length === 0) {
    return 0; // Handle empty array
  }

  let total = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const price = item.price || 0; // Handle missing price
    const quantity = item.quantity || 0; // Handle missing quantity
    total += price * quantity;
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

//Test with empty array
const emptyItems = [];
const emptyTotal = calculateTotal(emptyItems);
console.log(emptyTotal); // Output: 0

//Test with invalid item
const invalidItems = [
  { price: 10, quantity: 2 },
  { quantity: 5 },
  { price: 20, quantity: 1 },
];
const invalidTotal = calculateTotal(invalidItems);
console.log(invalidTotal); // Output: 40
```