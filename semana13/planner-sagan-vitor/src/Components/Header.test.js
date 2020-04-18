import PrimarySearchAppBar from './Header'
import React from 'react'
import { shallow } from 'enzyme'

describe('Header components', () => {
  test('should have', () => {
    const header = shallow(<PrimarySearchAppBar />)
    expect(header).toEqual({})
  })

})
