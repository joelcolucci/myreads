import React from 'react';
import PropTypes from 'prop-types';


function Book(props) {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${props.coverUrl})`
          }}></div>
        <div className="book-shelf-changer">
          <select>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{props.authors.map((author) => `${author} `)}</div>
    </div>
  );
}


Book.propTypes = {
  title: PropTypes.string,
  authors: PropTypes.string,
  coverUrl: PropTypes.string
};


export default Book;
