import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../../../../assets/images/eu_img.jpg';
import MyCV from '../../../../../assets/cv/cv.pdf';
import MyCVEn from '../../../../../assets/cv/cv_en.pdf';
import { Button } from '../../../Common';

const Header = () => {
    return (
        <>
            <header>
                <div className="gradient-header"></div>
                <div className="container content-header">
                    <div className="content-info">
                        <div className="container my-name">
                            <h5>Olá, sou</h5>
                            <h1>Matheus Vieira</h1>
                            <span>Desenvolvedor Front-End</span>
                            <br />
                        </div>
                        <Button 
                            name={'Veja meu currículo'}
                            archiveBr={MyCV}
                            archiveEn={MyCVEn}
                            nameArchive={'CV Matheus Vieira'}
                        />
                    </div>
                    <div className="content-image">
                        <div className="img-eu">
                            <img src={Avatar} title='avatar' alt='avatar' />
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