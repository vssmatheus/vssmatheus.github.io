import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from "react-router-dom"

import { Footer } from '../Footer';
import { Header } from '../Header';
import * as S from './AppCommon.style';

const AppCommon = ({children}) => {

  return (
    <>
      <S.Container>
        <main>
          <Header />
          <Outlet />
          <Footer />
        </main>
      </S.Container>
    </>
  );
};

AppCommon.propTypes = {
  children: PropTypes.any,
};

export default AppCommon;