/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import book from "./book.js";

const everydayPack = new Backpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false,
    "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());


const harryPoter1 = new book(
    "Harry Potter 1",
    "Fantasy",
    500,
    "JK Rowling",
    "Unknown"
);
const harryPoter2 = new book(
    "Harry Potter 2",
    "Fantasy",
    100,
    "JK Rowling",
    "Unknown"
);
const harryPoter3 = new book(
    "Harry Potter 3",
    "Fantasy",
    800,
    "JK Rowling",
    "Unknown"
);
const harryPoter4 = new book(
    "Harry Potter 4",
    "Fantasy",
    600,
    "JK Rowling",
    "Unknown"
);
const harryPoter5 = new book(
    "Harry Potter 5",
    "Fantasy",
    400,
    "JK Rowling",
    "Unknown"
);

console.log(harryPoter1);
console.log(harryPoter2);
console.log(harryPoter3);
console.log(harryPoter4);
console.log(harryPoter5);
console.log(harryPoter2.publisher);