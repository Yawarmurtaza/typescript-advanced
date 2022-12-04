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
const constMethodsInline_1 = __importDefault(require("./constMethodsInline"));
const PolymorphicTypeThis_1 = __importDefault(require("./PolymorphicTypeThis"));
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
(0, constMethodsInline_1.default)();
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
(0, PolymorphicTypeThis_1.default)();
//# sourceMappingURL=app.js.map