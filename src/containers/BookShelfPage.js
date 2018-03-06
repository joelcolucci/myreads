import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Bookshelf from '../components/Bookshelf';
import ListBooksContent from '../components/ListBooksContent';
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';


function BookShelfPage(props) {
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
      <Header>
        <HeaderTitle>MyReads</HeaderTitle>
      </Header>
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


BookShelfPage.propTypes = {
  books: PropTypes.array,
  onBookshelfUpdate: PropTypes.func
};


export default BookShelfPage;
