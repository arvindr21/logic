const revString1 = require('../src/reverseString').revString1;
const revString2 = require('../src/reverseString').revString2;
const revString3 = require('../src/reverseString').revString3;

describe("Reverse String - Approach 1", () => {
    test("it should return a reversed string", () => {
        const input = "asd";
        const output = "dsa";
        expect(revString1(input)).toEqual(output);
    });

    test("it should return a reversed string when integer is passed", () => {
        const input = 123;
        const output = "321";
        expect(revString1(input)).toEqual(output);
    });

    test("it should throw an error for `undefined` input", () => {
        const input = undefined;
        let output;
        try {
            revString1(input);
        } catch (e) {
            expect(e.error).toBe(TypeError)
        }
    });

    test("it should throw an error for `NaN` input", () => {
        const input = NaN;
        let output;
        try {
            revString1(input);
        } catch (e) {
            expect(e.error).toBe(TypeError)
        }
    });
});


describe("Reverse String - Approach 2", () => {
    test("it should return a reversed string", () => {
        const input = "asd";
        const output = "dsa";
        expect(revString2(input)).toEqual(output);
    });

    test("it should return a reversed string when integer is passed", () => {
        const input = 123;
        const output = "321";
        expect(revString2(input)).toEqual(output);
    });

    test("it should throw an error for `undefined` input", () => {
        const input = undefined;
        let output;
        try {
            revString2(input);
        } catch (e) {
            expect(e.error).toBe(TypeError)
        }
    });

    test("it should throw an error for `NaN` input", () => {
        const input = NaN;
        let output;
        try {
            revString2(input);
        } catch (e) {
            expect(e.error).toBe(TypeError)
        }
    });
});

describe("Reverse String - Approach 3", () => {
    test("it should return a reversed string", () => {
        const input = "asd";
        const output = "dsa";
        expect(revString3(input)).toEqual(output);
    });

    test("it should return a reversed string when integer is passed", () => {
        const input = 123;
        const output = "321";
        expect(revString3(input)).toEqual(output);
    });

    test("it should throw an error for `undefined` input", () => {
        const input = undefined;
        let output;
        try {
            revString3(input);
        } catch (e) {
            expect(e.error).toBe(TypeError)
        }
    });

    test("it should throw an error for `NaN` input", () => {
        const input = NaN;
        let output;
        try {
            revString3(input);
        } catch (e) {
            expect(e.error).toBe(TypeError)
        }
    });
});