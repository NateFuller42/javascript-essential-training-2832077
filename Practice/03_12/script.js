/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */


const refrigerator = class {
    constructor(
        make,
        model,
        storagespace,
        smart,
        warranty,
        waterdispenser,
        icedispenser
    ) {
        this.make = make;
        this.model = model;
        this.storagespace = storagespace;
        this.smart = smart;
        this.warranty = warranty;
        this.waterdispenser = waterdispenser;
        this.icedispenser = icedispenser;

    }

    dispenseIce(toggle) {
        if (this.icedispenser) {
            console.log('Dispensing Ice');
        } else {
            console.log('Refrigerator does not have ice dispenser');
        }
    }
}

export default refrigerator;

const samsungFridge = new refrigerator(
    "Samsung",
    'Nate4000',
    300,
    false,
    true,
    true,
    false
);

console.log('Here is the SamsungFridge: ', samsungFridge);
console.log('Here is the function: ', samsungFridge.dispenseIce(true));