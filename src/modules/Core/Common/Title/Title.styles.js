import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  line-height: 1rem;
`;

export { Title };
