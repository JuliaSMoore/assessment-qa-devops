const {shuffleArray} = require('./utils')
const {bots} = require(`./data.js`)

describe('shuffleArray should', () => {
    test(`return an array`, () => {
        expect(typeof shuffleArray(bots)).toBe(`object`)
    })

    test(`return an array of the same length`, () => {
        expect(shuffleArray(bots).length).toEqual(bots.length)
    })
})