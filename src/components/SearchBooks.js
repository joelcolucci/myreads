import React from 'react';

import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';


function SearchBooks(props) {
  let {
    handleQueryChange,
    searchResults,
    onBookShelfUpdate } = props;

  return (
    <div className="search-books">
      <SearchBooksBar onQueryChange={handleQueryChange} />
      <SearchBooksResults
        books={searchResults}
        onBookshelfUpdate={onBookShelfUpdate} />
    </div>
  );
}


export default SearchBooks;
