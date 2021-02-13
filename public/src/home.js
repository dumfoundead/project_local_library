function getTotalBooksCount(books) {
  const numberOfBooks = books.reduce((acc, book) => {
    if (book) acc++
    return acc
  }, 0)
  return numberOfBooks
}

function getTotalAccountsCount(accounts) {
  const numberOfAccounts = accounts.reduce((acc, account) => {
    if (account) acc++
    return acc
  }, 0)
  return numberOfAccounts
}

function getBooksBorrowedCount(books) {
  const numberOfBooksBorrowed = books.reduce((acc, book) => {
    if (book.borrows[0].returned === false) acc++
    return acc
  }, 0)
  return numberOfBooksBorrowed
}

function getMostCommonGenres(books) {
  const genreOfBooks = books.map(book => book.genre)
  const arr = []
  const count = {}
  genreOfBooks.forEach(i => count[i] = (count[i] || 0) + 1)
  for (let key in count) {
    arr.push({
      name: key,
      count: count[key]
    })
  }
  arr.sort((a, b) => a.count < b.count ? 1 : -1)
  return arr.slice(0, 5)
}

function getMostPopularBooks(books) {
  const sliceEnd = books.length > 5 ? 5 : books.length
  return books
    .map(book => {
      return {
        name: book.title,
        count: book.borrows.length
      }
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, sliceEnd)
}

function getMostPopularAuthors(books, authors) {
  const arr = []
  authors.forEach(author => {
    const selectedAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    }
    books.forEach(book => {
      if (book.authorId === author.id) selectedAuthor.count += book.borrows.length
    })
    arr.push(selectedAuthor) 
  })
  return arr.sort((a, b) => b.count - a.count).slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
