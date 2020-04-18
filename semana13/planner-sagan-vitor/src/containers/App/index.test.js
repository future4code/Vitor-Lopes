import { App } from './index'
import React from 'react'
import { shallow } from 'enzyme'

describe('App component', () => {
    test('should have', () => {
        const appContainer = shallow(<App />)
        expect(appContainer).toEqual({})

    })

})
