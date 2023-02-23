/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


let array1 = [
    5,
    "help",
    {
        test: 'one',
        test1: 'two'
    },
    true,
    false,
    8.12,
    `<ul>booping</ul>`
];
console.log(array1);

let lastItem = array1.pop();
console.log(array1);

array1.unshift(lastItem);
console.log(array1);

array1.sort();
console.log(array1);

array1.splice(array1.findIndex(element => element === 'help'), 1);

console.log(array1);