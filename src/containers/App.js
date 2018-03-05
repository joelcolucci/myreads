import React from 'react';
import { Route } from 'react-router-dom';

import ListBooks from '../components/ListBooks';
import SearchBooks from '../components/SearchBooks';


class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks />
        )} />

        <Route exact path="/" render={() => (
          <ListBooks />
        )} />
      </div>
    );
  }
}

export default BooksApp;
