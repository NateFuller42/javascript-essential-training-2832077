/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const computer = {
    operatingSystem: "Windows",
    processor: "Intel",
    sunset: false,
    ram: {
        speed: "3000mhz",
        size: "32GB"
    },
    rebootCommand: false,
    reboot: function (flag) {
        this.rebootCommand = flag
    }
};