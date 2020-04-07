import React from 'react'
import { LoginPagePure } from './index'
import { mount } from 'enzyme'

describe('Checkout Components', () => {
    test('deve começar o checkout com o initial state', () => {
        const component = mount(<LoginPagePure />)

        expect(component).toEqual({})
        expect(component.state().userInfo).toEqual({})

        component.unmount()

    })
})
