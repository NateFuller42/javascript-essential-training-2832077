/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

/*
  In the browser, identify a specific element or a set of elements you want to target.
  Use the console or the script.js file if you wanted to get more advanced to find those target elements.
  Then move beyond the basics. Try targeting specific elements nested inside other elements,
  and use advanced CSS queries to get just what you want and nothing else.
  Make sure to experiment with both querySelector and querySelectorAll to see how they work differently and what type of data you get in return.
  And if you want to try something really advanced, try populating a variable with an element higher up
  in the DOM tree hierarchy, and then use a querySelector on that variable to find one of its children.
 */


// Get All buttons


console.log(document.querySelectorAll("li"));

console.log(document.querySelectorAll("li form"));
document.querySelectorAll("form > button").forEach(item => item.style.backgroundColor = "blue");

let myList = document.querySelector("li form");
myList.innerHTML = myList.parentNode.nextSibling;