import styled, { css } from 'styled-components';
import { device } from '/modules/Utils/Devices';

const Content = styled.main`
  position: relative;
  top: 0;
  width: 100%;
  min-width: 320px;
  min-height: calc(100vh - 80px);
  background-color: ${(props) => props.theme.config.colors.background};
  padding: 5.6rem 4rem ${(props) => (props.hasIdentifierEnv ? '11rem' : '7rem')}
    12rem;
  transition: 0.2s ease-in;
  overflow: auto;
  @media ${device.tablet} {
    padding: 5.6rem 1rem 7rem 9rem;
  }
  @media ${device.mobile} {
    top: 0;
    padding: 3.2rem 1rem 5rem 1rem;
    min-height: calc(100vh - 60px);
  }
  ${({ opened }) =>
    opened &&
    css`
      padding-left: 38rem;
      transition: 0.2s ease-out;
    `}
`;

export { Content };