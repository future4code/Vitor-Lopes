import React from "react";
import { connect } from "react-redux";
import { createTask, getTasksList } from '../../actions'
import Header from '../../Components/Header'
import styled from 'styled-components'
import {
  Select,
  Paper,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  TextField,
} from '@material-ui/core';

const TaskBarWrapper = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const CreateTasksBar = styled.form`
  width: 40%;
  min-width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
const GridDays = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(7, 1fr);
  margin-top: 3vh;
  padding: 0 50px;
  width: 100vw;
  height: 78vh;
`
const GridDaysName = styled.div`
  display: grid;
  width: 100vw;
  height: 2vh;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
  padding: 0 50px;
  margin-top: 3vh;
  justify-items: center;
`
const PaddingBetweenTasks = styled.div`
  padding-top: 3px;
`

class Planner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: {},
      diaDaSemana: 'segunda',
      tarefaUsuario: '',
    }
  }

  componentDidMount() {
    this.props.getTasks()
  }

  handleChange = (e) => {
    this.setState({ diaDaSemana: e.target.value })
  }

  handleTaskOnChange = (e) => {
    this.setState({ tarefaUsuario: e.target.value })
  }

  sendNewTask = (e) => {
    e.preventDefault()
    console.log(this.state)
    const newTask = {
      day: this.state.diaDaSemana,
      text: this.state.tarefaUsuario
    }
    if (this.state.tarefaUsuario === '') {
      alert('Por favor, preencha sua tarefa')
    } else {
      console.log(this.state.newTask)
      this.props.sendNewTask(newTask)
      this.setState({
        tarefaUsuario: ''
      })
    }
  }

  render() {

    return (
      <div>
        <Header />
        <Paper>
          <TaskBarWrapper>
            <CreateTasksBar>
              <TextField
                value={this.state.tarefaUsuario}
                label='Qual é sua tarefa?'
                onChange={this.handleTaskOnChange}
              >
              </TextField>
              <FormControl>
                <InputLabel >Selecione o dia</InputLabel>
                <Select id='day' value={this.state.diaDaSemana} onChange={this.handleChange}>
                  <MenuItem value={'segunda'}>Segunda-Feira</MenuItem>
                  <MenuItem value={'terca'}>Terça-Feira</MenuItem>
                  <MenuItem value={'quarta'}>Quarta-Feira</MenuItem>
                  <MenuItem value={'quinta'}>Quinta-Feira</MenuItem>
                  <MenuItem value={'sexta'}>Sexta-Feira</MenuItem>
                  <MenuItem value={'sabado'}>Sábado</MenuItem>
                  <MenuItem value={'domingo'}>Domingo  </MenuItem>
                </Select>
              </FormControl>
              <Button onClick={this.sendNewTask} color='primary'>enviar</Button>
            </CreateTasksBar>
          </TaskBarWrapper>
        </Paper>
        <GridDaysName>
          <div>Segunda</div>
          <div>Terça</div>
          <div>Quarta</div>
          <div>Quinta</div>
          <div>Sexta</div>
          <div>Sábado</div>
          <div>Domingo</div>
        </GridDaysName>
        <GridDays>
          <Paper elevation={1}>
            {this.props.taskList.map(element => {
              if (element.day === 'segunda') {
                return (
                  <div>
                    <Paper>{element.text}</Paper>
                    <PaddingBetweenTasks />
                  </div>
                )
              }
            })}
          </Paper>
          <Paper elevation={1}>
            {this.props.taskList.map(element => {
              if (element.day === 'terca') {
                return (
                  <div>
                    <Paper>{element.text}</Paper>
                    <PaddingBetweenTasks />
                  </div>
                )
              }
            })}
          </Paper>
          <Paper elevation={1}>
            {this.props.taskList.map(element => {
              if (element.day === 'quarta') {
                return (
                  <div>
                    <Paper>{element.text}</Paper>
                    <PaddingBetweenTasks />
                  </div>
                )
              }
            })}
          </Paper>
          <Paper elevation={1}>
            {this.props.taskList.map(element => {
              if (element.day === 'quinta') {
                return (
                  <div>
                    <Paper>{element.text}</Paper>
                    <PaddingBetweenTasks />
                  </div>
                )
              }
            })}
          </Paper>
          <Paper elevation={1}>
            {this.props.taskList.map(element => {
              if (element.day === 'sexta') {
                return (
                  <div>
                    <Paper>{element.text}</Paper>
                    <PaddingBetweenTasks />
                  </div>
                )
              }
            })}
          </Paper>
          <Paper elevation={1}>
            {this.props.taskList.map(element => {
              if (element.day === 'sabado') {
                return (
                  <div>
                    <Paper>{element.text}</Paper>
                    <PaddingBetweenTasks />
                  </div>
                )
              }
            })}
          </Paper>
          <Paper elevation={1}>
            {this.props.taskList.map(element => {
              if (element.day === 'domingo') {
                return (
                  <div>
                    <Paper>{element.text}</Paper>
                    <PaddingBetweenTasks />
                  </div>
                )
              }
            })}
          </Paper>
        </GridDays>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    taskList: state.tasks.tasksList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTasks: () => dispatch(getTasksList()),
    sendNewTask: (taskContent) => dispatch(createTask(taskContent))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
