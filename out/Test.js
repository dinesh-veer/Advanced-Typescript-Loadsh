"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("TEst");
var aaa;
aaa = 'test';
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
exports.Person = Person;
