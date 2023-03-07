import React from 'react';
import PropTypes from 'prop-types';
import ImageHeader from '../../../../../assets/images/header.jpg';
import * as S from './Header.style';
import { Title } from '../../../Common';
import {  CgFacebook, CgInstagram, } from 'react-icons/cg';
import {  BsLinkedin, BsGithub } from 'react-icons/bs';
import { SocialLink } from './SocialLink';

const Header = () => {

  return (
    <>
      <S.HeaderContainer>
        <img src={ImageHeader} alt="Header" />
        <S.ContentInfo>
          <S.Name>
            <strong>Matheus</strong> Vieira
          </S.Name>
          <div>
            Olá
          </div>
          <Title weight={300} size={'42px'} color="#fff">
            Sou <strong>Web Developer</strong>
          </Title>
          <span>
            Sou Web developer, estou a 4 anos trabalhando com desenvolvimento <br />
            de sites e soluções para web, desenvolvendo mais especificamente a parte Front-End.
          </span>
          <S.Social>
            <SocialLink src={'https://www.facebook.com/matheus.vieiradasilva.77/'}>
              <CgFacebook color='#fffff' />
            </SocialLink>
            <SocialLink src={'https://www.instagram.com/vssmatheus/'}>
              <CgInstagram color='#fffff' />
            </SocialLink>
            <SocialLink src={'https://www.linkedin.com/in/matheus-vieira-ss'}>
              <BsLinkedin color='#fffff' />
            </SocialLink>
            <SocialLink src={'https://github.com/vssmatheus'}>
              <BsGithub color='#fffff' />
            </SocialLink>
          </S.Social>
        </S.ContentInfo>
      </S.HeaderContainer>
    </>
  );
};

Header.propTypes = {
  routes: PropTypes.array,
};

export default Header;