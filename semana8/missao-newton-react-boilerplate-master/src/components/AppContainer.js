import React from 'react'
import { Card, Checkbox, TextField, List, ListItem, ListItemText, Fab } from '@material-ui/core'
import styled from 'styled-components'
import BarraDeTarefas from './BarraDeTarefas'
import Provider from '../redux/react-redux-f4'

// const store = createStore()

// const Provider = styled.div`
//   display: block;
//   width: 600px;
//   margin: auto;
// `
const H1 = styled.h1`
  text-align: center;
  color: brown;
  padding: 50px 0;
  `
  export function anoBissexto(ano) {
	if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0)) {
	  return (true)
	}
  }

export class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'todas',
      newTask: '',
      tasks: [
        {
          task: "Use Redux",
          statusDone: false,
          id: 1
        }
      ]
    }
  }

  handleToggle = taskRecebida => {
    const { tasks } = this.state;
    let copyTasks = [...tasks];
    copyTasks.forEach(task => {
      if (task.id === taskRecebida.id) {
        task.statusDone = !taskRecebida.statusDone;
      } else {
        return task;
      }
    });

    this.setState({
      tasks: copyTasks
    });
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const newTask = {
        task: this.state.newTask,
        statusDone: false,
        id: new Date().getTime()
      }
      const novoArrayDeTasks = [...this.state.tasks]
      novoArrayDeTasks.push(newTask)
      this.setState({ tasks: novoArrayDeTasks })
      this.setState({ newTask: '' })
    }
  }

  deleteTask = taskDelete => {
    const filter = this.state.tasks.filter(task => {
      if (task.id === taskDelete) {
        return false

      }
      return true
    })
    console.log(filter)
    this.setState({ tasks: filter })
  }

  handleFilterChange = (event, value) => {
    console.log(value)
    this.setState({ selectedFilter: value })
  }

  render() {
    console.log(this.state.tasks)
    let filteredTasks = this.state.tasks

    if (this.state.selectedFilter === 'pendentes') {
      filteredTasks = this.state.tasks.filter(task => {
        if (task.statusDone === true) {
          return false

        }
        return true
      })
    } else if (this.state.selectedFilter === 'completas') {
      filteredTasks = this.state.tasks.filter(task => {
        if (task.statusDone === false) {
          return false

        }
        return true
      })

    }

    return <Provider>
      <H1>4Tasks</H1>
      <Card  >
        <TextField
          id="standard-full-width"
          placeholder="O que tem que ser feito?"
          fullWidth
          type='text'
          value={this.state.newTask}
          onChange={(e) => this.setState({ newTask: e.target.value })}
          onKeyDown={this.handleKeyDown}
        />
        <List>
          {filteredTasks.map((element, index) => (
            <ListItem
              key={index}
              role={undefined}
              dense
              button
            >
              <Checkbox
                checked={element.statusDone}
                tabIndex={-1}
                disableRipple
                onClick={() => this.handleToggle(element)}
              />
              <ListItemText primary={element.task} />
              <button onClick={() => this.deleteTask(element.id)} >excluir</button>
            </ListItem>
          ))}
        </List>
        <BarraDeTarefas onchangeFilter={this.handleFilterChange} selectedFilter={this.state.selectedFilter} />
      </Card>
    </Provider>
  }
}