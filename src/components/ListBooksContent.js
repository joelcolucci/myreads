import React from 'react';
import PropTypes from 'prop-types';


function ListBooksContent(props) {
  return (
    <div className="list-books-content">
      <div>
        {props.children}
      </div>
    </div>
  );
}


ListBooksContent.propTypes = {
  children: PropTypes.node
};


export default ListBooksContent;
