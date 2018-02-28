import React from 'react';
import PropTypes from 'prop-types';


class Book extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shelf: 'none'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let updatedShelf = event.target.value;
    this.setState({shelf: updatedShelf});

    // TODO: Invoke passed down ListBooks state handler
  }

  render() {
    let { title, authors, coverUrl } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${coverUrl})`
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
        <div className="book-authors">{authors.map((author) => `${author} `)}</div>
      </div>
    );
  }
}


Book.propTypes = {
  title: PropTypes.string,
  authors: PropTypes.array,
  coverUrl: PropTypes.string
};


export default Book;
