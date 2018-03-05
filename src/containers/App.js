import React from 'react';
import { Route } from 'react-router-dom';

import * as BooksAPI from '../utilities/BooksAPI';
import BookShelfPage from '../containers/BookShelfPage';
import BookSearchPage from '../containers/BookSearchPage';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      booksById: {},
      searchResults: []
    };

    this.handleBookshelfUpdate = this.handleBookshelfUpdate.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleResetSearchResults = this.handleResetSearchResults.bind(this);
  }

  componentDidMount() {
    BooksAPI
      .getAll()
      .then((books) => {
        let booksById = books.reduce((accumulator, elem) => {
          accumulator[elem.id] = elem;
          return accumulator;
        }, {});

        this.setState({
          booksById: {
            ...this.state.booksById,
            ...booksById
          }
        });
      });
  }

  handleBookshelfUpdate(book, shelf) {
    BooksAPI
      .update(book, shelf)
      .then(() => {
        this.setState({
          booksById: {
            ...this.state.booksById,
            [book.id]: {
              ...book,
              shelf: shelf
            }
          }
        });
      });
  }

  handleQueryChange(query) {
    BooksAPI
      .search(query)
      .then((results) => {
        if (!results || results.error) {
          results = [];
        }

        let mergedResults = results.map((book) => {
          let savedBook = this.state.booksById[book.id];
          if (savedBook) {
            return {...book, shelf: savedBook.shelf};
          }
          return {...book, shelf: 'none'};
        });

        this.setState({
          searchResults: mergedResults
        });
      });
  }

  handleResetSearchResults() {
    this.setState({
      searchResults: []
    });
  }

  render() {
    let books = Object.keys(this.state.booksById).map((key) => {
      return this.state.booksById[key];
    });

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelfPage
            books={books}
            onBookshelfUpdate={this.handleBookshelfUpdate} />
        )} />

        <Route path="/search" render={() => (
          <BookSearchPage
            searchResults={this.state.searchResults}
            onBookShelfUpdate={this.handleBookshelfUpdate}
            onQueryChange={this.handleQueryChange}
            onResetSearchResults={this.handleResetSearchResults} />
        )} />
      </div>
    );
  }
}


export default App;
