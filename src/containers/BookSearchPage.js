import React from 'react';

import SearchBooksBar from '../components/SearchBooksBar';
import SearchBooksResults from '../components/SearchBooksResults';


class BookSearchPage extends React.Component {
  constructor(props) {
    super(props);

    // Clear searchResults state on App to ensure blank page
    props.onResetSearchResults();
  }

  render() {
    let {
      onQueryChange,
      searchResults,
      onBookShelfUpdate } = this.props;

    return (
      <div className="search-books">
        <SearchBooksBar onQueryChange={onQueryChange} />
        <SearchBooksResults
          books={searchResults}
          onBookshelfUpdate={onBookShelfUpdate} />
      </div>
    );
  }
}


export default BookSearchPage;
