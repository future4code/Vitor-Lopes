import React from 'react'
import { Card, Checkbox, TextField, List, ListItem, ListItemText } from '@material-ui/core'
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

export class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      this.setState({tasks: novoArrayDeTasks})
      this.setState({newTask: ''})
    }
  }

  render() {
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
          {this.state.tasks.map((element, index) => (
            <ListItem
              key={index}
              role={undefined}
              dense
              button
              onClick={() => this.handleToggle(element)}
            >
              <Checkbox
                checked={element.statusDone}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={element.task} />
            </ListItem>
          ))}
        </List>
        <BarraDeTarefas />
      </Card>
    </Provider>
  }
}