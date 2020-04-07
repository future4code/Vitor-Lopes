import {routes} from './index'

describe('Routes', () => {

    test('should have route', () => {
        const mockedRoutes = {
            root: "/",
            registrationPage: '/signup',
            postFeed: '/posts',
            postDetails: `/posts/detail`
          };

        expect(mockedRoutes.root).toBe('/')
        expect(mockedRoutes.registrationPage).toBe('/signup')
        expect(mockedRoutes.postFeed).toBe('/posts')
        expect(mockedRoutes.postDetails).toBe('/posts/detail')
    })
    
    
})

