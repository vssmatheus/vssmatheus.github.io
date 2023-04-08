import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ name, archive, nameArchive }) => {

    return (
        <>
            <S.ButtonContainer
                className='button-dowload-cv'
                type="application/octet-stream"
                href={archive}
                download={nameArchive}
                target="_blank"
                rel="noopener noreferrer"
            >
                {name}
            </S.ButtonContainer>
        </>
    );
};

Button.propTypes = {
    name: PropTypes.string,
    archive: PropTypes.any,
    nameArchive: PropTypes.string,
};

export default Button;