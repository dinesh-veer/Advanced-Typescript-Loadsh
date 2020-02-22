"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Test_1 = require("./Test");
var _ = __importStar(require("lodash"));
var person = new Test_1.Person("Dinesh", "Veer");
console.log(person.getFullName());
var array = [1, 2, 3, 4, 5, 6];
console.log(_.reverse(array));
