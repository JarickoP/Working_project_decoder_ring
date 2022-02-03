// Write your tests here!
const expect = require("chai").expect;
const caesarModule = require("../src/caesar")

describe("caesarModule.caesar", () =>{
    it("should return a message with the alphabet shifted by 2", () => {
        const input = "Hello"
        const shift = 2
        const expected = "jgnnq"
        const actual = caesarModule.caesar(input, shift)
        expect(actual).to.equal(expected)
    })
    it("should be able to decode the same message", () => {
        const input = "jgnnq"
        const shift = -2
        const expected = "hello"
        const actual = caesarModule.caesar(input, shift)
        expect(actual).to.equal(expected)
    })
    it("should return false if shift value is <-25, 0, >25, or not entered", () => {
        const input = "Hi, I'm paul"
        const shift = 0
        const actual = caesarModule.caesar(input, shift)
        expect(actual).to.equal(false)
    })
    it("should ignore capital letters and return all lowercase", () => {
        const input = "how ARE you"
        const shift = 2
        const expected = "jqy ctg aqw"
        const actual = caesarModule.caesar(input, shift)
        expect(actual).to.equal(expected)
    })
    it("should be able to wrap around the end ex: 'z' with a shift of 2 would be 'b'", () => {
        const input = "xyz"
        const shift = 3
        const expected = "abc"
        const actual = caesarModule.caesar(input, shift)
        expect(actual).to.equal(expected)
    })
    it("should maintain spaces and special characters whether being encoded or decoded", () => {
        const input = "$ = money"
        const shift  = 2
        const expected = "$ = oqpga"
        const actual = caesarModule.caesar(input, shift)
        expect(actual).to.equal(expected)
    })
})