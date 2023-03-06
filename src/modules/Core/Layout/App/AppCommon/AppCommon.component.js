import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from "react-router-dom"

import { Footer } from '../Footer';
import { Header } from '../Header';

const AppCommon = ({children}) => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

AppCommon.propTypes = {
  children: PropTypes.any,
};

export default AppCommon;