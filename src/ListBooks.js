import React from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import Bookshelf from './Bookshelf';
import ListBooksTitle from './ListBooksTitle';
import ListBooksContent from './ListBooksContent';


class ListBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  componentDidMount() {
    BooksAPI
      .getAll()
      .then((books) => this.setState({
        books: books
      }));
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
            books={currentlyReadingBooks} />
          <Bookshelf
            title="Want to Read"
            books={wantToReadBooks} />
          <Bookshelf
            title="Read"
            books={readBooks} />
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
