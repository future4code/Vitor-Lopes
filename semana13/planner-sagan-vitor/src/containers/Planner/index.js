import React from "react";
import { connect } from "react-redux";
import { createTask, getTasksList } from '../../actions'

class Planner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: {}
    }
  }

  componentDidMount() {
    this.props.getTasks()
  }

  render() {
    console.log(this.props.taskList, 'this.props.taskList')

    return (
      <div>
        <h1>teste</h1>
        {this.props.taskList.map(element => {
          return (
            <div key={element.id}>
              <p>{element.day}</p>
              <p>{element.text}</p>
            </div>
          )
        })}
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
    getTasks: () => dispatch(getTasksList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
