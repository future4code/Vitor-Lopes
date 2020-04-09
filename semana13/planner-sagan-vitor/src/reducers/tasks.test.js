import tasks from './tasks'
import { getTasks } from '../actions/index'

const mockedInitialState = {
    tasksList: [{}],
}

describe('tasks reducer', () => {
    test('should GET_TASKS', () => {
        const mockedPostList = []
        const mockedAction = getTasks(mockedPostList)
        const mockedState = tasks(mockedInitialState, mockedAction)

        expect(mockedState.tasksList).toHaveLength(0)
    })
})
