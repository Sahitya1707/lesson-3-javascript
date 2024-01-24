const output = document.querySelector("body p:nth-of-type(2)");

/* STEP 1: Creating an array
When declaring and initializing an array, you can include strings, numbers, booleans, and even other arrays */
let myArray = [1, true, 3, [`a`, `b`, `c`]];
/* STEP 2: Reading and changing array elements
You can refer to a particular element in an array with it's index number */
// output.textContent = myArray[0];
console.log((output.textContent = myArray[0]));
// You can also change a particular element
myArray[1] = false;

// An array within an array is called a multidimensional array - it can be accessed by specifying the index of the first array, then the item within it
/* STEP 3: Determining array length
Being able to figure out how many elements are contained in an array is a critical feature of JavaScript programming */
output.textContent = `My array contains ${myArray.length} elements.`;
// In particular, looping through arrays
for (let i = 0; i < myArray.length; i++) {
  output.textContent += ` ${myArray[i]}, `;

  // Check if an element is array
  if (myArray[i].constructor === Array) {
    console.log(`true`);
  }
}
/* STEP 4: Convert a string to an array
If there is a common character that can act as a delimiter in a string, we can use this character to create an array */
let orig6 = `
toronto tonrotn1 tonrotn2 tonrotn3 tonrotn4 tonrotn5 tonrotn56 tonrotn17 tonrotn18 tonrotn17 tonrotn199
`;
let orig6Array = orig6.split(" ");
console.log(orig6Array);

// Output one of the array items

// Output the last element of the array
output.textContent += orig6Array[3];
output.textContent += orig6Array[orig6Array.length - 1];
/* STEP 5: Convert an array back to a string
Use join() and toString() - note that join() allows you to choose and insert a delimiter, while toString() does not */
let orig6String = orig6Array.join("|");
console.log(orig6String);
/* STEP 6: Adding and removing items from an array
Without the ability to edit the contents of an array, this type of variable would have limited use - but adding and removing array items is pretty straightforward */
let orig6Length = orig6Array.push("Buffalo");
// Adding one or more items to an array with push()
console.log(orig6Array);
let removeItem = orig6Array.pop();
console.log(removeItem);
console.log(orig6Array);
// If you would like to capture how many elements are in the array after you have edited it, then…

// Removing an item from an array with pop()

// pop() returns the item that was removed, rather than the length of the updated array, so…
orig6Length = orig6Array.unshift("4");
console.log(orig6Array);
orig6Array.shift();
console.log(orig6Array);
// To do the same thing, that is, to add and remove an item from the beginning of the array, use shift() and unshift()
orig6Array.splice(1, 2, `22`);
console.log(orig6Array);
// We can also modify the array contents by deleting or substituting elements, or inserting one or more elements at a certain place with splice()
// let slicedArray =/
/* That's it for the basics of working with arrays! With these tools at your disposal, a whole new world of possibilities with JavaScript are at your command */
