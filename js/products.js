// STEP 1: Declare and initialize variables
// STEP 1a: Grab the parts of the DOM that we need to build the invoice
const productList = document.querySelector("tbody");
const totalData = document.querySelector("tfoot td:first-of-type");
// console.log(totalData);
// STEP 1b: Build the products array in the format 'Product Name:0.00'
let products = [
  "Pizza: 5.9",
  "Orange Juice: 2.88",
  "Milk: 1",
  "Bacon: 7.49",
  "Coffee: 5.99",
  "Coffee: 5.99",
];
// STEP 1c: Set up invoiceTotal variable - start at zero
let invoiceTotal = 0;
// STEP 1d: Declare the itemRow and the itemDetail array;
let itemRow = new Array();
let itemDetail = new Array();
// STEP 2: Build a loop to iterate through the products array
let itemDesc;
let itemPrice;
for (let i = 0; i < products.length; i++) {
  //   console.log(products[i]);
  // STEP 3: Break apart the s name from the price for each item with split()
  products[i] = products[i].split(": ");
  //   console.log(products[1]);
  products[i][1] = Number(products[i][1]);

  // STEP 4: Now we have an array as an element of an array - set the second array element to the s price (as type number)
  itemDesc = products[i][0];
  itemPrice = products[i][1];
  //   console.log(itemDesc, itemPrice);
  // STEP 5: Add the price of this s to the invoice total
  // STEP 6: Capture each product name and price as variables
  // STEP 7: Create a TR element for this product and price in the invoice table
  itemRow[i] = document.createElement("tr");
  // STEP 8: Build the string that contains two TD elements each containing one of the item description, and the item price
  itemDetail[i] = `<td> ${itemDesc}</td> <td>${itemPrice}</td>`;

  // STEP 9: Set the above string as the innerHTML of the new TR element, and then append the new element to the table body (var productList)
  itemRow[i].innerHTML = itemDetail[i];
  console.log(itemRow[i]);
  productList.append(itemRow[i]);
}
// STEP 10: Set the total cost of the invoice as the textContent of the TD in the TFOOT (var totalData), rounding the number to two decimal places
