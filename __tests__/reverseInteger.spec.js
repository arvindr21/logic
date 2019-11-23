const revInt = require('../src/reverseInteger');

describe("Reverse Integer", () => {
    test("it should return a reversed (positive) Integer", () => {
        const input = 123;
        const output = 321;
        expect(revInt(input)).toEqual(output);
    });

    test("it should return a reversed (negative) Integer", () => {
        const input = -123;
        const output = -321;
        expect(revInt(input)).toEqual(output);
    });

    test("it should throw an error for string input", () => {
        const input = "asdf";
        let output;
        try {
            revInt(input);
        } catch (e) {
            expect(e.error).toBe(TypeError)
        }
    });

    test("it should throw an error for `NaN` input", () => {
        const input = NaN;
        let output;
        try {
            revInt(input);
        } catch (e) {
            expect(e.error).toBe(TypeError)
        }
    });

});