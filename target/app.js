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
Object.defineProperty(exports, "__esModule", { value: true });
const utils = __importStar(require("./lib/utilityFunctions"));
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
console.log(item);
console.log(item[0]);
console.log(item[1]);
let arr = [
    ["", 123],
    ["", 123],
    ["", 123],
];
// A simple enum with names of the days of week.
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 0] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 1] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 2] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 3] = "Thursday";
    Weekdays[Weekdays["Friday"] = 4] = "Friday";
    Weekdays[Weekdays["Saturday"] = 5] = "Saturday";
    Weekdays[Weekdays["Sunday"] = 6] = "Sunday";
})(Weekdays || (Weekdays = {}));
;
// Gets a weekday for Canadian office. It returns whatever "getWeekDay" method returns defined in WeekDaysService type.
const getCanadianWeekDay = (date) => {
    if (date.getDay() === 5) {
        return Weekdays.Friday;
    }
    if (date.getDay() === 6) {
        return Weekdays.Saturday;
    }
    return Weekdays.Sunday;
};
// A method that gets an array of dates for a middle east country.
const getBankHoliday = (year) => {
    return new Array();
};
//# sourceMappingURL=app.js.map