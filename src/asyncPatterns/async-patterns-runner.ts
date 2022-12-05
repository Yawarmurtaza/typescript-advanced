import { Category } from "./../enums";
import * as utils from "./../lib/utilityFunctions";

// interface LibraryManagerCallback {
//   (err: Error | unknown, titles: string[] | null): void;
//   name: string;
// }

// function getBooksByCategory(cat: Category, callback: LibraryManagerCallback): void {
//   setTimeout(() => {
//     try {
//       let foundBooks: string[] = utils.GetBookTitlesByCategory(cat);
//       if(foundBooks.length > 0){
//         callback("", foundBooks);
//       }
//       else{
//         throw new Error(`No books were found for ${cat}`);
//       }
//     } catch (error) {
//         callback(error, null);
//     }
//   }, 1000);
// }

// function logCategorySearch(err: Error| unknown, titles: string[] | null) : void {
//     if(err){
//         console.log(`An error occured while getting the titles. Error details: ${err}`);
//     }
//     else{
//         console.log(`Book titles are found`);
//         console.log(titles);
//     }
// }

// export const runner = () : void => {
//     console.log("Begining search for books with category...");
//     getBooksByCategory(Category.Biography, logCategorySearch);
//     console.log("Search started...");
// }

// export default runner;

// /**
//  * Promise<T> = Task<T>
//  * @param cat
//  */
// function getBooksByCategory(cat: Category): Promise<string[]> {
//   let task: Promise<string[]> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let foundBooks = utils.GetBookTitlesByCategory(cat);
//       if (foundBooks.length > 0) {
//         resolve(foundBooks);
//       } else {
//         reject(`No books were found for the category '${Category[cat]}'`);
//       }
//     }, 1000);
//   });

//   return task;
// }

// function logCategorySearch(
//   err: Error | unknown,
//   titles: string[] | null
// ): void {
//   if (err) {
//     console.log(
//       `An error occured while getting the titles. Error details: ${err}`
//     );
//   } else {
//     console.log(`Book titles are found`);
//     console.log(titles);
//   }
// }

// export const runner = (): void => {
//   console.log("Begining search for books with category...");
//   getBooksByCategory(Category.Biography)
//     .then((books) => {
//       console.log(books);
//       return books.length;
//     }, reason => {
//         console.log(reason);
//         return 0;})
//     .then((booksCount) => {
//       console.log(`Total number of books: ${booksCount}`);
//     })
//     .catch((reason) => {
//       console.log(reason);
//     });
//   console.log("Search started...");
// };

// export default runner;

/**
 * Promise<T> = Task<T>
 * @param cat
 */
function getBooksByCategory(cat: Category): Promise<string[]> {
  let task: Promise<string[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      let foundBooks = utils.GetBookTitlesByCategory(cat);
      if (foundBooks.length > 0) {
        resolve(foundBooks);
      } else {
        reject(`No books were found for the category '${Category[cat]}'`);
      }
    }, 1000);
  });

  return task;
}

function logCategorySearch(
  err: Error | unknown,
  titles: string[] | null
): void {
  if (err) {
    console.log(
      `An error occured while getting the titles. Error details: ${err}`
    );
  } else {
    console.log(`Book titles are found`);
    console.log(titles);
  }
}

async function asyncGetAbooks() {
  let books = await getBooksByCategory(Category.Biography);
  console.log(books);
  return await getBooksByCategory(Category.Children);
}

export const runner = (): void => {
  console.log("Begining search for books with category...");

  asyncGetAbooks()
    .then((data) => {
      console.log("From then function: " + data);
    })
    .catch((reason) => {
      console.log(reason);
    });

  console.log("Search started...");
};

export default runner;
