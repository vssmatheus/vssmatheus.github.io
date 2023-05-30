import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Button.style'

const Button = ({ archiveBr, nameArchive }) => {
  const handleSelect = elm => {
    window.open(elm, '_blank', 'noopener', 'noreferrer')
    // if (newWindow) newWindow.opener = null;
  }

  return (
    <>
      <S.Select
        href={archiveBr}
        download={nameArchive}
        name="dropDown"
        onChange={e => handleSelect(e.target.value)}
      >
        {'Dawnload'}
      </S.Select>
    </>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  archiveBr: PropTypes.any,
  archiveEn: PropTypes.any,
  nameArchive: PropTypes.string,
}

export default Button
