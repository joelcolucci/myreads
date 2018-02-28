import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';


function Bookshelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book) => {
            return (
              <li key={book.id}>
                <Book
                  title={book.title}
                  authors={book.authors}
                  coverUrl={book.imageLinks.thumbnail} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}


Bookshelf.propTypes = {
  title: PropTypes.string,
  books: PropTypes.array
};


export default Bookshelf;
