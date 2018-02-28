import React from 'react';

import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';


function SearchBooks(props) {
  return (
    <div className="search-books">
      <SearchBooksBar />
      <SearchBooksResults />
    </div>
  );
}


export default SearchBooks;
