# Off-by-One Error in Dapp Item Quantity Calculation

This repository demonstrates a common off-by-one error in Dapp development, specifically in calculating the total price of items in a shopping cart. The `bug.js` file shows the erroneous code, while `bugSolution.js` provides a corrected version. 

The bug arises from not properly handling cases with empty shopping carts or items with missing price/quantity information. 

## Bug
The original code doesn't handle edge cases such as an empty array. If the `items` array is empty, it would not give the correct result.  

## Solution
The solution implements input validation and error handling, preventing unexpected behavior when invalid or missing data is present.  It also uses more robust error handling to inform the user that the shopping cart is empty, avoiding a silent failure.