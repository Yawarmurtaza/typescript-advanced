import { Category } from "./enums";
import { Book, Logger, Author, Librarian, Magazine } from "./interfaces";
import { UniversityLibrarian, ReferenceItem } from "./classes";
import * as utils from "./lib/utilityFunctions";

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
console.log(item);
console.log(item[0]);
console.log(item[1]);

let arr: Array<KeyValuePair<string, number>> = [
    ["", 123],
    ["", 123],
    ["", 123],
];
