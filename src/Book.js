import React from 'react';
import PropTypes from 'prop-types';


class Book extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shelf: props.book.shelf
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let updatedShelf = event.target.value;
    this.setState({shelf: updatedShelf});

    // Invoke passed down ListBooks state handler
    this.props.onShelfUpdate(this.props.book, updatedShelf);
  }

  render() {
    let { title, authors, imageLinks } = this.props.book;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={imageLinks && {
            width: 128,
            height: 193,
            backgroundImage: `url(${imageLinks.thumbnail})`
            }}></div>
          <div className="book-shelf-changer">
            <select value={this.state.shelf} onChange={this.handleChange}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors && authors.map((author) => `${author} `)}</div>
      </div>
    );
  }
}


Book.propTypes = {
  book: PropTypes.object.isRequired,
  onShelfUpdate: PropTypes.func
};


export default Book;
