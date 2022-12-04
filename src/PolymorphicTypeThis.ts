import { Book, Logger, Author, Librarian, Magazine } from "./interfaces";
import * as utils from "./lib/utilityFunctions";

class Library {
    checkIn(book: Book): this {

        const currentType : string = this instanceof ChildrenBook ? "ChildrenBook" : 
        this instanceof HistoryBook ? "HistoryBook" : this instanceof Library ? "Library" : "Unknown";

        console.log(`[${currentType}] - Book ${book.title} has been checked in.`);


        return this;
    }

    checkout(book: Book, studentId: string): this {
        const currentType : string = this instanceof ChildrenBook ? "ChildrenBook" : 
        this instanceof HistoryBook ? "HistoryBook" : this instanceof Library ? "Library" : "Unknown";

        console.log(`[${currentType}] - Book ${book.title} has been checked out by ${studentId}`);
        return this;
    }
}

class ChildrenBook extends Library {
    clean(book: Book): this {
        console.log(`Book ${book.title} has been cleaned.`);
        return this;
    }
}

class HistoryBook  extends Library {
    Rewrite(book: Book) : this {
        console.log(`The history in ${book.title} has been rewritten.`);
        return this;
    }
}

export const polymorphicRunner = (): void => {
    const book = utils.GetAllBooks()[0];
    const x = new ChildrenBook();
    x.checkIn(book).clean(book).checkout(book, "someStudentId");

    const x2 = new HistoryBook();
    x2.checkIn(book).Rewrite(book).checkout(book, "some poor history student's id");
}

export default polymorphicRunner;