import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from 'styled-components'
import { routes } from '../containers/Router/index'

const Logo = styled.img`
height: 100px;
`
const ButtonWrapper = styled.div`
display: flex;
justify-content: space-between;
width: 100vw;
`
const LabelButton = styled.p`
  font-size: 12px;
  margin: -5px;
  padding: 0;
`
const logoUrl = 'https://user-images.githubusercontent.com/56808066/77550367-ce600780-6e8f-11ea-8aa1-a666bb51626d.png'

class PrimarySearchAppBar extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <ButtonWrapper>
              <Logo onClick={this.props.goToHomePage} src={logoUrl}></Logo>
              <IconButton
                onClick={this.props.goToTripsList}
                color="inherit"
              >
                <div>
                  <AccountCircle />
                  <LabelButton>login</LabelButton>
                </div>
              </IconButton>
            </ButtonWrapper>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    goToHomePage: () => dispatch(push(routes.root)),
    goToTripsList: () => dispatch(push(routes.tripsCreate)),
  };
}

export default connect(null, mapDispatchToProps)(PrimarySearchAppBar);


