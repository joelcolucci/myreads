import React from 'react';
import PropTypes from 'prop-types';


function HeaderTitle(props) {
  return (
    <h1 className="header-title">
      {props.children}
    </h1>
  );
}


HeaderTitle.propTypes = {
  children: PropTypes.node
};


export default HeaderTitle;
