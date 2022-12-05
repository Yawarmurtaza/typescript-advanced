"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const utils = __importStar(require("./lib/utilityFunctions"));
const getRandomUserDataApi_1 = __importDefault(require("./asyncPatterns/getRandomUserDataApi"));
function PrintBookInfo({ title: bookTitle, author: bookAuthor }) {
    console.log(`title: ${bookTitle} was written by ${bookAuthor}`);
}
let [b1, b2] = utils.GetAllBooks();
// PrintBookInfo(b1);
// PrintBookInfo(b2);
function PrintBookfn([b1, b2, ...restOfTheBooks]) {
    PrintBookInfo(b1);
    PrintBookInfo(b2);
    restOfTheBooks.forEach(b => { PrintBookInfo(b); });
}
// PrintBookfn(utils.GetAllBooks());
let { title, author } = b1;
let item = ["A 123.456", b1];
// console.log(item);
// console.log(item[0]);
// console.log(item[1]);
let arr = [
    ["", 123],
    ["", 123],
    ["", 123],
];
/**
 * Type union or using | to tell the compiler that the object could be either one of the other type. Books or Magazine type.
 */
const readingMaterial = utils.GetAllMagazines();
/**
 * Type intersection or using '&' to add types means adding all properties of both the types. Books + Magazine.
 */
const serialNovel = {
    author: "",
    category: enums_1.Category.Biography,
    available: false,
    publisher: "",
    id: 123,
    title: "sdfsdf"
};
/*

ExecuteMessageProcessing();

polymorphicRunner();

let newLibrrarian = new UniversityLibrarian();
newLibrrarian.phone = "7784887110";
newLibrrarian.hostSeminar("Pakistan History");


let s1 : string = "name";
let s2 : string = "name";
console.log(`string: ${s1} === ${s2} = ${s1 === s2}`);

let symbol1 = Symbol("symbol_1"); // symbol1.toString() = symbol description i.e: symbol_1
let symbol2 = Symbol("symbol_1");
console.log(`Symbol: ${symbol1.toString()} === ${symbol2.toString()} = ${symbol1 === symbol2}`);

// uisng symbol

let obj = {
    [symbol1] : "value of my symbol key"
};

console.log(`obj[symbol1] = ${obj[symbol1]}`);



console.log("----------------[ Decorator ]----------------")
let lib1 = new UniversityLibrarian();
let myLib = new MyLibrary();
*/
// runner();
(0, getRandomUserDataApi_1.default)();
//# sourceMappingURL=app.js.map