import React from 'react';

import * as BooksAPI from './BooksAPI';
import SearchBooksBar from './SearchBooksBar';
import SearchBooksResults from './SearchBooksResults';


class SearchBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleQueryChange(query) {
    BooksAPI
      .search(query)
      .then((results) => {
        if (results.error) {
          results = [];
        }
        this.setState({
          results: results
        });
      });
  }

  render() {
    return (
      <div className="search-books">
        <SearchBooksBar onQueryChange={this.handleQueryChange} />
        <SearchBooksResults results={this.state.results} />
      </div>
    );
  }
}


export default SearchBooks;
