import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class SearchBooksBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleQueryChange(event) {
    let query = event.target.value.trim();

    this.setState({ query: query });

    this.props.onQueryChange(query);
  }

  render() {
    return (
      <div className="search-books-bar">
        <Link
          to="/"
          className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input
            value={this.state.query}
            onChange={this.handleQueryChange}
            type="text"
            placeholder="Search by title or author"/>
        </div>
      </div>
    );
  }
}


SearchBooksBar.propTypes = {
  onQueryChange: PropTypes.func
};


export default SearchBooksBar;
