import { showPosts, sendID } from './index'

describe("Todo Action-Creators", () => {
    test("Get Posts", () => {
        const mockTodoText = 'teste'
        const mockedAction = showPosts(mockTodoText)

        expect(mockedAction.type).toEqual('GET_ POSTS')
        expect(mockedAction.payload.posts).toBeDefined()
    })
    test('Send ID ', () => {
        const mockTodoText = 'teste'
        const mockedAction = sendID(mockTodoText)

        expect(mockedAction.type).toEqual('SEND_ID')
        expect(mockedAction.payload.postInfo).toBeDefined()        
    })
})
