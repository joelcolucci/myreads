import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';


function SearchBooksResults(props) {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {props.results.map((book) => {
          return (
            <li key={book.id}>
              <Book
                book={book} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}


SearchBooksResults.propTypes = {
  results: PropTypes.array
};


export default SearchBooksResults;
