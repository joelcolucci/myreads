import React from 'react';
import { Route } from 'react-router-dom';

import * as BooksAPI from '../utilities/BooksAPI';
import ListBooks from '../components/ListBooks';
import SearchBooks from '../components/SearchBooks';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      booksById: {},
      bookIdsByShelf: {},
      searchResults: []
    };

    this.handleBookshelfUpdate = this.handleBookshelfUpdate.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  componentDidMount() {
    BooksAPI
      .getAll()
      .then((books) => {
        let booksById = books.reduce((accumulator, elem) => {
          accumulator[elem.id] = elem;
          return accumulator;
        }, {});

        let bookIdsByShelf = books.reduce((accumulator, elem) => {
          if (accumulator[elem.shelf]) {
            accumulator[elem.shelf].push(elem.id);
          } else {
            accumulator[elem.shelf] = [elem.id];
          }
          return accumulator;
        }, {});

        this.setState({
          ...this.state,
          booksById: {
            ...this.state.booksById,
            ...booksById
          },
          bookIdsByShelf: {
            ...this.state.bookIdsByShelf,
            ...bookIdsByShelf
          }
        });
      });
  }

  handleBookshelfUpdate(book, shelf) {
    let updatedBooks = this.state.books.map((item) => {
      // Use spread syntax to ensure immutability
      if (item.id === book.id) {
        return {...item, shelf: shelf};
      } else {
        return {...item};
      }
    });

    BooksAPI
      .update(book, shelf)
      .then((_) => {
        this.setState({
          books: updatedBooks
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
        // TODO: Merge books on shelf with searchResults
        this.setState({
          searchResults: results
        });
      });
  }

  render() {
    let books = Object.keys(this.state.booksById).map((key) => {
      return this.state.booksById[key];
    });

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={books}
            onBookshelfUpdate={this.handleBookshelfUpdate} />
        )} />

        <Route path="/search" render={() => (
          <SearchBooks
            searchResults={this.state.searchResults}
            handleQueryChange={this.handleQueryChange}
            onBookShelfUpdate={this.handleBookshelfUpdate} />
        )} />
      </div>
    );
  }
}


export default App;
