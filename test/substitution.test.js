// Write your tests here!
const expect = require("chai").expect;
const substitutionModule = require("../src/substitution")

describe ("substitutionModule", () => {
    it ("should return false if alphabet isnt 26 characters long", () => {
        const input = "hello"
        const alphabet = "abcdefghijklmnopqrstuvwxy"
        const actual = substitutionModule.substitution(input, alphabet, true)
        expect(actual).to.equal(false)
    })
    it ("correctly translates", () => {
        const input = "hello"
        const alphabet = "zyxwvutsrqponmlkjihgfedcba"
        const expected = "svool"
        const actual = substitutionModule.substitution(input, alphabet, true)
        expect(actual).to.equal(expected)
    })
    it ("should return false if any duplicate letters in given alphabet", () => {
        const input = "hello"
        const alphabet = "zyxwvutsrqponmlkjihgfedcbz"
        const actual = substitutionModule.substitution(input, alphabet, true)
        expect(actual).to.equal(false)
    })
    it ("should maintain spaces", () => {
        const input = "he llo"
        const alphabet = "zyxwvutsrqponmlkjihgfedcba"
        const actual = substitutionModule.substitution(input, alphabet, true)
        const expected = "sv ool"
        expect(actual).to.equal(expected)
    })
    it ("should ignore capitals", () => {
        const input = "HeLLo"
        const alphabet = "zyxwvutsrqponmlkjihgfedcba"
        const expected = "svool"
        const actual = substitutionModule.substitution(input, alphabet, true)
        expect(actual).to.equal(expected)
    })
})