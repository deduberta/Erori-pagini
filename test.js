const {validation, REQUIRED_ERROR, MATCH_ERROR, STRENGTH_ERROR} = require('./index')

describe('validation', () => {
    test('Should return required error', () => {
        const actual = validation('', 'something')
        expect(actual).toBe(REQUIRED_ERROR)
    })

    test('Should return match error', () => {
        const actual = validation('something', 'something-else')
        expect(actual).toBe(MATCH_ERROR)
    })

    test('Should return strength error for password too short', () => {
        const actual = validation('short', 'short')
        expect(actual).toBe(STRENGTH_ERROR)
    })
    test('Should return strength error for no digit', () => {
        const actual = validation('shortError', 'shortError')
        expect(actual).toBe(STRENGTH_ERROR)
    })
    test('Should return strength error for no digit', () => {
        const actual = validation('SHORT_ERROR22', 'SHORT_ERROR22')
        expect(actual).toBe(STRENGTH_ERROR)
    })
    test('Should pass', () => {
        const actual = validation('goodPassword22', 'goodPassword22')
        expect(actual).toBe('')
    })
})