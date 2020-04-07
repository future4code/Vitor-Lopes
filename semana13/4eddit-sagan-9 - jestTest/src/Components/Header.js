import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from 'styled-components'
import { routes } from '../containers/Router'

const Logo = styled.img`
height: 10vh;
`
const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
`
const ToolbarWrapper = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
`
const ButtonBar = styled.div`
  display: flex;
  margin: 10px;
`
const logoUrl = 'https://user-images.githubusercontent.com/56808066/77929693-58d5ac00-7280-11ea-88df-ff8e6a32f424.jpg'

class PrimarySearchAppBar extends React.Component {
  constructor(props){
    super(props)
  }

  goToFeed = () => {
    this.props.goToFeed()
  }

  render() {
    return (
      <DivWrapper>
        <AppBar position="static">
          <ToolbarWrapper>
              <Logo src={logoUrl} onClick={this.goToFeed}></Logo>
              <ButtonBar>
                {this.props.logOutButton}
              </ButtonBar>
          </ToolbarWrapper>
        </AppBar>
      </DivWrapper>
    );
  }
}

function mapDispatchToProps (dispatch){
  return{
    goToFeed: ()=> dispatch(push(routes.postFeed))
  }
}

export default connect(null, mapDispatchToProps)(PrimarySearchAppBar);


