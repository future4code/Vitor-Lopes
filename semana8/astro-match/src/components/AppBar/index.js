import PropTypes from 'prop-types'
import React from 'react'
import logoImage from '../../img/logo.png'
import { ActionWrapper, AppBarWrapper, Logo } from './styled'

export const AppBar = (props) => {
  return (
    <AppBarWrapper>
      <ActionWrapper>
        {props.leftAction}
      </ActionWrapper>
      <Logo src={logoImage}/>
      <ActionWrapper>
        {props.rightAction}
      </ActionWrapper>
    </AppBarWrapper>
  )
}

AppBar.propTypes = {
  leftAction: PropTypes.object,
  rightAction: PropTypes.object,
}

export default AppBar;
