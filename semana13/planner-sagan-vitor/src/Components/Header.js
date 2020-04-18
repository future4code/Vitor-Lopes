import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components'

const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 8vh;
`
const ToolbarWrapper = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 8vh;
`

class PrimarySearchAppBar extends React.Component {

  goToFeed = () => {
    this.props.goToFeed()
  }

  render() {
    return (
      <DivWrapper>
        <AppBar position="static">
          <ToolbarWrapper>
          </ToolbarWrapper>
        </AppBar>
      </DivWrapper>
    );
  }
}


export default PrimarySearchAppBar

