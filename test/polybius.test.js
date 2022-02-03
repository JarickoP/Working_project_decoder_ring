// Write your tests here!
const expect = require("chai").expect;
const polybiusModule = require("../src/polybius")

describe ("polybiusModule", () => {
    it ("should translate i/j to 42", () => {
        let input = "j i"
        let encode = true
        let expected = "42 42"
        let actual = polybiusModule.polybius(input, encode)
        expect(actual).to.equal(expected)
    })
    it ("should translate 42 to i/j", () => {
        let input = "42"
        let encode = false
        let expected = "i/j"
        let actual = polybiusModule.polybius(input, encode)
        expect(actual).to.equal(expected)
    })
    it ("should ignore capitals ex: a, A both equal 11", () => {
        let input = "a A"
        let encode = true
        let expected = "11 11"
        let actual = polybiusModule.polybius(input, encode)
        expect(actual).to.equal(expected)
    })
    it ("should maintain spaces wether encoding or decoding", () => {
        let input = "Some space between"
        let encode = true
        let expected = "34432351 3453113151 21514425515133"
        let actual = polybiusModule.polybius(input, encode)
        expect(actual).to.equal(expected)
    })
})