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
                            <h5>Hi, i'm</h5>
                            <h1>Matheus Vieira</h1>
                            <span>Front-End Developer</span>
                            <br />
                        </div>
                        <Button 
                            name={'See my resume'}
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