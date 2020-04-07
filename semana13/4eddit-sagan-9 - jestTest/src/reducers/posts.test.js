import posts from './posts'
import {showPosts} from '../Actions'

const mockedInitialState = {
    postList: [{}],
    postChoose: ""
  }

describe('Posts reducer', () => {
    test('should get posts', () => {
        const mockedPostList = []
        const mockedAction = showPosts(mockedPostList)
        const mockedState = posts(mockedInitialState, mockedAction)

        expect(mockedState.postList).toHaveLength(0)
    })
    test('should send id', () => {
        const mockedPostChoose = []
        const mockedAction = showPosts(mockedPostChoose)
        const mockedState = posts(mockedInitialState, mockedAction)

        expect(mockedState.postChoose).toHaveLength(0)
    })
    
    
})
