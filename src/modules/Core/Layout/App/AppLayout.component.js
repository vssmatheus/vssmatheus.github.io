import React from 'react';
import PropTypes from 'prop-types';
import { AppCommon } from './AppCommon';
// import * as S from './AppLayout.style';

const AppLayout = () => {

  return (
    <>
      <AppCommon />
    </>
  );
};

AppLayout.propTypes = {
  routes: PropTypes.array,
};

export default AppLayout;