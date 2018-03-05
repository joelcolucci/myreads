import React from 'react';
import PropTypes from 'prop-types';

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
      searchResults,
      onQueryChange,
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


BookSearchPage.propTypes = {
  searchResults: PropTypes.array,
  onBookShelfUpdate: PropTypes.func,
  onQueryChange: PropTypes.func,
  onResetSearchResults: PropTypes.func
};


export default BookSearchPage;
