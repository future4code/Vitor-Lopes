import React from 'react'
import { Planner } from './index'
import { shallow } from 'enzyme'


describe('Checkout Planner Components', () => {
    test('ititial state', () => {
        const mockedTaskList = [{}]
        const mockedGetTasks = jest.fn()

        const component = shallow(
            <Planner
                taskList={mockedTaskList}
                getTasks={mockedGetTasks}
            />)

        component.instance()

        expect(mockedGetTasks).toHaveBeenCalledTimes(1)
    })
})