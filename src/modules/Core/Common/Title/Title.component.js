import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Title.styles';

const Title = ({ tag, size, color, weight, children, ...props }) => (
  <S.Title weight={weight} color={color} as={tag} size={size} {...props}>
    {children}
  </S.Title>
);

Title.defaultProps = {
  tag: 'h1',
};

Title.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.number,
  children: PropTypes.any,
};

export default Title;