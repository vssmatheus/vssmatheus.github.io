import React from 'react';
import PropTypes from 'prop-types';

const Header = () => {

  return (
    <>
      <h2>Header</h2>
    </>
  );
};

Header.propTypes = {
  routes: PropTypes.array,
};

export default Header;