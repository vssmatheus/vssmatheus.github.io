import React from 'react';
import PropTypes from 'prop-types';
import Avatar  from '../../../../../assets/images/eu_img.png'

const Header = () => {

  return (
    <>
      <header>
            <div className="gradient-header"></div>
            <div className="container content-header">    
                <div className="content-info">
                    <div className="container my-name">
                        <h1>Matheus Vieira S. Santos</h1>
                        <span>Desenvolvedor Front-End</span>
                        <br />
                        <span style={{display: 'flex', alignItems: 'center', fontSize: '12pt'}}>
                            <i style={{color: 'rgb(247, 105, 105)', margin: '4px 8px 0 0'}} className="far fa-envelope"></i>
                            <span>vssmatheus@gmail.com</span>
                            <input style={{display: 'none'}} type="text" id="emailItem" />
                              <i style={{color: '#afafaf', margin: '4px 8px 0 8px'}} className="far fa-link"></i>
                        </span>
                    </div>
                    <div className="container">
                        <div className="my-social">
                            <a href="https://github.com/vssmatheus" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/matheus-vieira-ss/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.instagram.com/vssmatheus/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://m.facebook.com/matheus.vieiradasilva.77" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="content-image">
                    <div className="img-eu">
                        <img src={Avatar} title='avatar'  alt='avatar'/>
                    </div>
                </div>
            </div>
        </header>
    </>
  );
};

Header.propTypes = {
  routes: PropTypes.array,
};

export default Header;