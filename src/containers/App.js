import React from 'react';
import { Route } from 'react-router-dom';

import * as BooksAPI from '../utilities/BooksAPI';
import ListBooks from '../components/ListBooks';
import SearchBooks from '../components/SearchBooks';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      searchResults: []
    };

    this.handleBookshelfUpdate = this.handleBookshelfUpdate.bind(this);
  }

  componentDidMount() {
    BooksAPI
      .getAll()
      .then((books) => {
        this.setState({
          ...this.state,
          books: books
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

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            onBookshelfUpdate={this.handleBookshelfUpdate} />
        )} />

        <Route path="/search" render={() => (
          <SearchBooks />
        )} />
      </div>
    );
  }
}


export default App;
