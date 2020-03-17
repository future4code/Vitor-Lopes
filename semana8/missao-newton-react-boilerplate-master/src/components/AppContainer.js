import React from 'react'
import { Card, Checkbox, TextField, List, ListItem, ListItemText } from '@material-ui/core'
import styled from 'styled-components'
import BarraDeTarefas from './BarraDeTarefas'


const Conteiner = styled.div`
  display: block;
  width: 600px;
  margin: auto;
`
const H1 = styled.h1`
  text-align: center;
  color: brown;
  padding: 50px 0;
  `


export class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  // incrementTask = (event) => { //arrumar
  //   this.setState({tasks: event.target.value })
  // }

  render() {
    return <Conteiner>
      <H1>4Tasks</H1>
      <Card  >
        <TextField
          id="standard-full-width"
          placeholder="O que tem que ser feito?"
          fullWidth
          value={this.taskFieldValue}
          onClick={this.incrementTask}
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
    </Conteiner>
  }
}