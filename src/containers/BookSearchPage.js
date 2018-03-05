import React from 'react';

import SearchBooksBar from '../components/SearchBooksBar';
import SearchBooksResults from '../components/SearchBooksResults';


function BookSearchPage(props) {
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


export default BookSearchPage;
