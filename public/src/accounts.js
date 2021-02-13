function findAccountById(accounts, id) {
  const accountFinder = accounts.find(account => account.id === id)
  return accountFinder
}

function sortAccountsByLastName(accounts) {
  const sortLastNames = accounts.sort((a, b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1)
  return sortLastNames
}

function getTotalNumberOfBorrows(account, books) {
  let result = books.reduce((acc, book) => {
    for (let i = 0; i < book.borrows.length; i++) {
      if (book.borrows[i].id === account.id) acc++
    }
    return acc
  }, 0)
  return result
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter(book => book.borrows
    .some(acc => acc.id === account.id && !acc.returned))
    .map(book => {
      let author = authors.find(author => author.id === book.authorId)
      book.author = author
      return book
    })
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
