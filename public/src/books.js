function findAuthorById(authors, id) {
  const findAuthor = authors.find(object => object.id === id)
  return findAuthor
}

function findBookById(books, id) {
  const findBook = books.find(book => book.id === id)
  return findBook
}

function partitionBooksByBorrowedStatus(books) {
  let arr1 = books.filter(book => book.borrows[0].returned === false)
  let arr2 = books.filter(book => book.borrows[0].returned !== false)
  return [arr1, arr2]
}

function getBorrowersForBook(book, accounts) {
  let result = book.borrows.map(borrower => {
    let matchId = accounts.find(account => borrower.id === account.id)
    matchId.returned = borrower.returned
    return matchId
  })
  return result.filter((borrower, i) => result.findIndex(item => item.id === borrower.id) === i)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
