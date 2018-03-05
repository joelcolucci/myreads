import React from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from '../utilities/BooksAPI';
import Bookshelf from './Bookshelf';
import ListBooksTitle from './ListBooksTitle';
import ListBooksContent from './ListBooksContent';


class ListBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };

    this.handleBookshelfUpdate = this.handleBookshelfUpdate.bind(this);
  }

  componentDidMount() {
    BooksAPI
      .getAll()
      .then((books) => {
        this.setState({
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
    let books = this.state.books;

    let currentlyReadingBooks = books.filter((book) => {
      return book.shelf === 'currentlyReading';
    });

    let wantToReadBooks = books.filter((book) => {
      return book.shelf === 'wantToRead';
    });

    let readBooks = books.filter((book) => {
      return book.shelf === 'read';
    });

    return (
      <div className="list-books">
        <ListBooksTitle />
        <ListBooksContent>
          <Bookshelf
            title="Currently Reading"
            books={currentlyReadingBooks}
            onBookshelfUpdate={this.handleBookshelfUpdate} />
          <Bookshelf
            title="Want to Read"
            books={wantToReadBooks}
            onBookshelfUpdate={this.handleBookshelfUpdate} />
          <Bookshelf
            title="Read"
            books={readBooks}
            onBookshelfUpdate={this.handleBookshelfUpdate} />
        </ListBooksContent>
        <div className="open-search">
          <Link
            to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
