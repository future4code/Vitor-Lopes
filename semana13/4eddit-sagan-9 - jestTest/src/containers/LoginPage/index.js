import React, { Component } from "react";
import Header from '../../Components/Header'
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { routes } from '../Router/index'
import { setLogin } from '../../Actions/index'
import styled from 'styled-components'
import Input from '@material-ui/core/Input';
import { TextField, Button, Paper, Typography } from '@material-ui/core'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #e5e9ed;
  height: 90vh;
  padding: 10vh;
`
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 50px 10px 10px 40px;
  color: #4f4f50;
`
const TitleWrapper = styled.h2`
  color: #ff9800;
`

const ButtonPadding =styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 10px 20px 20px 50px;
  color: #4f4f50;
`
const GoToSignUpButton = styled.p`
    &:hover {
        color: #ff7828
    }
`
class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {}
    }
  }

  goToRegistration = () => {
    this.props.goToSignUp()
  }
  saveInfo = (event) => {
    const { name, value } = event.target
    this.setState({ userInfo: { ...this.state.userInfo, [name]: value } })
  }
  submitLogin = (event) => {
    event.preventDefault();
    this.props.sendDataToApi(this.state.userInfo)
  }

  render() {
    return (
      <PageWrapper>
        <Header />
        <ContentWrapper>
          <Paper elevation={10}>
              <FormWrapper onSubmit={this.submitLogin}>
                <Typography 
                gutterBottom variant="h5" 
                align='justify'
                >
                  Bem Vindo, usuário!
                </Typography>
                <TextField
                  label="Email"
                  style={{ margin: 12 }}
                  onChange={this.saveInfo}
                  name='email'
                  type='text'
                  required
                />
                <TextField
                  label="Senha"
                  style={{ margin: 12 }}
                  onChange={this.saveInfo}
                  name='password'
                  type='password'
                  required
                />
                <ButtonPadding>
                  <Button 
                  variant="contained" 
                  color="primary" 
                  type={onsubmit}
                  >
                    Entrar
                  </Button>
                </ButtonPadding>
                <Typography
                  gutterBottom
                  align='center'
                  variant="caption" >
                <GoToSignUpButton 
                onClick={this.goToRegistration}
                >
                  Ainda não tem cadastro? Clique aqui para cadastrar
                </GoToSignUpButton>
                </Typography>
              </FormWrapper>
            </Paper>
        </ContentWrapper>
      </PageWrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToSignUp: () => dispatch(push(routes.registrationPage)),
    sendDataToApi: (userInfo) => dispatch(setLogin(userInfo))
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);
