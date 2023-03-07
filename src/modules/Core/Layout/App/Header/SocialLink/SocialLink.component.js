import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './SocialLink.style';

const SocialLink = ({ src, children, ...props }) => (
  <S.Container>
    <Link style={{ textDecoration: 'none' }} color='#ffffff' target={'_blank'} to={src} {...props}>
        {children}
    </Link>
  </S.Container>
);

SocialLink.propTypes = {
  src: PropTypes.string,
  children: PropTypes.any,
};

export default SocialLink;