// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
    makeLuckyGreeting,
    multiplyBy12ThenHalve,
    multiplyBySeven,
    divideThenMultiply,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should take a string and add return a new string that adds three exclamation points to the argument', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit');

    expect.equal(actual, expected);

    const expected2 = 'hello world!!!';

    const actual2 = addExclamationPoints('hello world');

    expect.equal(actual2, expected2);

    const expected3 = 'test!!!';

    const actual3 = addExclamationPoints('test');

    expect.equal(actual3, expected3);
});

test('this test should take in a number and multiply it by seven', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected);

    const expected2 = 7;

    const actual2 = multiplyBySeven(1);

    expect.equal(actual2, expected2);

    const expected3 = 49;

    const actual3 = multiplyBySeven(7);

    expect.equal(actual3, expected3);
});

test('this test should take in a number and multiply it by twelve then cut the result in half', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected);

    const expected2 = 6;

    const actual2 = multiplyBy12ThenHalve(1);

    expect.equal(actual2, expected2);

    const expected3 = 18;

    const actual3 = multiplyBy12ThenHalve(3);

    expect.equal(actual3, expected3);
});

test('this test should take in two number and return a greeting that the sum of those numbers is todays lucky number', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12';

    const actual = makeLuckyGreeting(8, 4);

    expect.equal(actual, expected);
});

test('this test should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected);
});

/* test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected);
}); */


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

