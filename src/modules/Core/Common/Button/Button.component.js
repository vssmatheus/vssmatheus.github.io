import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ archiveBr, archiveEn, nameArchive }) => {

    const handleSelect = (elm) => {
        window.open(elm, '_blank', 'noopener', 'noreferrer');
        // if (newWindow) newWindow.opener = null;
    };

    return (
        <>
            <S.Select 
                href={archiveEn}
                download={nameArchive}
                name="dropDown" 
                onChange={e => handleSelect(e.target.value)}
            >
                <option value={archiveEn}>
                    {'See my resume'}
                </option>
                <option value={archiveEn}>
                            {'In english'}
                </option>
                <option value={archiveBr}>
                    {'In portuguese'}
                </option>
            </S.Select>
        </>
    );
};

Button.propTypes = {
    name: PropTypes.string,
    archiveBr: PropTypes.any,
    archiveEn: PropTypes.any,
    nameArchive: PropTypes.string,
};

export default Button;