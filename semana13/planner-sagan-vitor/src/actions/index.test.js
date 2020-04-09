import { getTasks, getTasksList, createTask } from './index'
import Axios from 'axios'

describe('Todo Action-Creators', () => {
    test("should GET_TASKS", () => {
        const mockTodoText = 'teste'
        const mockedAction = getTasks(mockTodoText)

        expect(mockedAction.type).toEqual('GET_TASKS')
        expect(mockedAction.payload.tasks).toBeDefined()
    })
    // test('should not return a list of tasks', async () => {
    //     const mockDataCreatedTask = undefined
    //     const mockedBaseUrl = '/'

    //     axios.get = jest.fn(() => ({ data: mockDataCreatedTask }))

    //     await getTasks()(mockDispatch)

    //     expect(mockDispatch).toHaveBeenCalled(1)
    //     axios.get(mockedBaseUrl)
    //     expect(axios.get).toThrowError()

    // });
})
