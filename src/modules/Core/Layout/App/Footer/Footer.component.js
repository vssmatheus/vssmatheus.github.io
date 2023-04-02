import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => {

  return (
    <>
      <footer id="footer">
          <div className="container footer">
              <span style={{fontSize: '0.8rem'}}>Copyright © 2020. Matheus Vieira da Silva Santos.</span>
          </div>
      </footer>
    </>
  );
};

Footer.propTypes = {
  routes: PropTypes.array,
};

export default Footer;