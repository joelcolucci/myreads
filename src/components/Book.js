import React from 'react';
import PropTypes from 'prop-types';


class Book extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let updatedShelf = event.target.value;

    this.props.onShelfUpdate(this.props.book, updatedShelf);
  }

  render() {
    let { title, authors, imageLinks, shelf } = this.props.book;

    return (
      <div className="book">

        <img className="book-cover" src={imageLinks && imageLinks.thumbnail} alt="Thumbnail of book cover" />

        <div className="book-details">
          <h3 className="book-title">{title}</h3>
          <div className="book-authors">
            {authors && authors.map((author) => `${author} `)}
          </div>

          <div className="book-toolbar">
            <div className="book-shelf-changer">
              Add to shelf
              <select value={shelf} onChange={this.handleChange}>
                <option disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


Book.propTypes = {
  book: PropTypes.object.isRequired,
  onShelfUpdate: PropTypes.func
};


export default Book;
