import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from 'styled-components'
import { routes } from '../containers/Router/index'

const Logo = styled.img`
height: 100px;
`

class PrimarySearchAppBar extends React.Component {

  render() {

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Logo onClick={this.props.goToHomePage} src='https://user-images.githubusercontent.com/56808066/77550367-ce600780-6e8f-11ea-8aa1-a666bb51626d.png'></Logo>
            <div>
              <div>
                <SearchIcon />
              </div>
              <InputBase
                type="text"
                value={this.props.valorDaBusca}
                onChange={this.props.acionaOnChange}
                placeholder="Para onde quer viajar?"
              />
            </div>
            <div />
            <div>
              <IconButton
                onClick={this.props.goToTripsList}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
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


