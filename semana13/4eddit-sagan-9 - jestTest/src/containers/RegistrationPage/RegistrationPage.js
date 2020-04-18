import React, { Component } from 'react'
import Header from '../../Components/Header'
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'
import { newUser } from '../../Actions/index'
import styled from 'styled-components'
import { TextField, Button, Paper, Typography } from '@material-ui/core'

const BodyWrapper = styled.div`
  background-color: #e5e9ed;
  height: 100vh;
`
const PageWrapper = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 24vw;
  height: 30vh;
  margin: 20vh auto;
`
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 50px 10px 10px 40px;
  color: #4f4f50;
`
const GoToLogInButton = styled.u`
    &:hover {
        color: #ff7828
    }
`
const ButtonPadding =styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 10px 20px 20px 50px;
  color: #4f4f50;
`

class RegistrationPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: {}
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ userData: { ...this.state.userData, [name]: value } })
  }
  sendData = (event) => {
    this.props.sendDataToApi(this.state.userData)
    event.preventDefault();
  }
  goToSignInPage = () => {
    this.props.goToLogIn()
  }


  render() {
    return (
      <BodyWrapper>
        <Header />
        <PageWrapper onSubmit={this.sendData}>
          <Paper elevation={10}>
            <FormWrapper>
              <Typography gutterBottom variant="h5" align='justify'>
                Crie uma conta para votar e comentar em todos os seus conteúdos favoritos!
              </Typography>
              <TextField
                label="Email"
                style={{ margin: 12 }}
                onChange={this.handleInputChange}
                name='email'
                type='text'
                required
              />
              <TextField
                label="Senha"
                style={{ margin: 12 }}
                onChange={this.handleInputChange}
                name='password'
                type='password'
                required
              />
              <TextField
                label="Nome de usuário"
                style={{ margin: 12 }}
                onChange={this.handleInputChange}
                name='username'
                type='text'
                required
              />
              <ButtonPadding>
                <Button variant="contained" color="primary" type={onsubmit}>Cadastrar</Button>
              </ButtonPadding>
              <Typography
                gutterBottom
                align='center'
                variant="caption" >
                Já possui uma conta? <GoToLogInButton onClick={this.goToSignInPage}>Faça login.</GoToLogInButton>
              </Typography>
            </FormWrapper>

          </Paper>
        </PageWrapper>
      </BodyWrapper>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToSignUp: () => dispatch(push(routes.registrationPage)),
    goToLogIn: () => dispatch(push(routes.root)),
    sendDataToApi: (userData) => dispatch(newUser(userData))
  };
}


export default connect(null, mapDispatchToProps)(RegistrationPage);
