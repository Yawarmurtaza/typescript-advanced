import { Category } from "./enums";
import { Book, Logger, Author, Librarian, Magazine } from "./interfaces";
import { UniversityLibrarian, ReferenceItem, MyLibrary } from "./classes";
import * as utils from "./lib/utilityFunctions";
import ExecuteMessageProcessing from "./constMethodsInline";
import polymorphicRunner from "./PolymorphicTypeThis";
// import './interfaceMerging';
import runner from "./asyncPatterns/async-patterns-runner";
import getApiRunner from './asyncPatterns/getRandomUserDataApi';

function PrintBookInfo({ title: bookTitle, author: bookAuthor }: Book): void {
    console.log(`title: ${bookTitle} was written by ${bookAuthor}`);
}

let [b1, b2] = utils.GetAllBooks();
// PrintBookInfo(b1);
// PrintBookInfo(b2);

function PrintBookfn([b1, b2, ...restOfTheBooks]: Book[]): void {
    PrintBookInfo(b1);
    PrintBookInfo(b2);
    restOfTheBooks.forEach(b => { PrintBookInfo(b) });

}

// PrintBookfn(utils.GetAllBooks());

let { title, author } = b1;
//console.log(title + " - " + author);


interface KeyValuePair<TKey, TValue> extends Array<TKey | TValue> {
    0: TKey;
    1: TValue;
}

let item: KeyValuePair<string, Book> = ["A 123.456", b1];
// console.log(item);
// console.log(item[0]);
// console.log(item[1]);

let arr: Array<KeyValuePair<string, number>> = [
    ["", 123],
    ["", 123],
    ["", 123],
];




/**
 * Type union or using | to tell the compiler that the object could be either one of the other type. Books or Magazine type.
 */
const readingMaterial: Book[] | Magazine[] = utils.GetAllMagazines();

/**
 * Type intersection or using '&' to add types means adding all properties of both the types. Books + Magazine.
 */
const serialNovel: Book & Magazine = {
    author: "",
    category: Category.Biography,
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
getApiRunner();