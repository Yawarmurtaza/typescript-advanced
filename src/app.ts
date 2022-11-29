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

// A simple enum with names of the days of week.
enum Weekdays { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday };

// A type defining methods on week days.
type WeekDaysService<CountryName> = {
    getWeekDay(date: Date): Weekdays;
    isWeekday(date: Date): boolean;
}

// A type defining bank holidays for a given country.
type BankHolidayService<CountryName> = {
    getAllBankHolidays(year: number): Array<Date>;
}

// A base type that allows access to different services required by an office.
type WorkDay<CountryName = "Canada"> = WeekDaysService<CountryName> & BankHolidayService<CountryName>;

// Canadian workday calendar
export type CanadianCalendar = WorkDay<"Canada">;

// Middle east calendar
export type MiddleEastCalendar = WorkDay<"MiddleEast">;

// Gets a weekday for Canadian office. It returns whatever "getWeekDay" method returns defined in WeekDaysService type.
const getCanadianWeekDay: CanadianCalendar["getWeekDay"] = (date: Date): Weekdays => {
    if (date.getDay() === 5) {
        return Weekdays.Friday;
    }
    if (date.getDay() === 6) {
        return Weekdays.Saturday;
    }
    return Weekdays.Sunday;
};

// A method that gets an array of dates for a middle east country.
const getBankHoliday: MiddleEastCalendar["getAllBankHolidays"] = (year: Number) => { 
    return new Array<Date>();     
}

