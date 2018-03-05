import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';


function SearchBooksResults(props) {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {props.books.map((book) => {
          return (
            <li key={book.id}>
              <Book
                book={book}
                onShelfUpdate={props.onBookshelfUpdate} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}


SearchBooksResults.propTypes = {
  books: PropTypes.array,
  onBookshelfUpdate: PropTypes.func
};


export default SearchBooksResults;
