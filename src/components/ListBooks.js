import React from 'react';
import { Link } from 'react-router-dom';

import Bookshelf from './Bookshelf';
import ListBooksTitle from './ListBooksTitle';
import ListBooksContent from './ListBooksContent';


function ListBooks(props) {
  let { books, onBookshelfUpdate } = props;

  let currentlyReadingBooks = books.filter((book) => {
    return book.shelf === 'currentlyReading';
  });

  let wantToReadBooks = books.filter((book) => {
    return book.shelf === 'wantToRead';
  });

  let readBooks = books.filter((book) => {
    return book.shelf === 'read';
  });

  return (
    <div className="list-books">
      <ListBooksTitle />
      <ListBooksContent>
        <Bookshelf
          title="Currently Reading"
          books={currentlyReadingBooks}
          onBookshelfUpdate={onBookshelfUpdate} />
        <Bookshelf
          title="Want to Read"
          books={wantToReadBooks}
          onBookshelfUpdate={onBookshelfUpdate} />
        <Bookshelf
          title="Read"
          books={readBooks}
          onBookshelfUpdate={onBookshelfUpdate} />
      </ListBooksContent>
      <div className="open-search">
        <Link
          to="/search">Add a book</Link>
      </div>
    </div>
  );
}


export default ListBooks;
