// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
    makeLuckyGreeting,
    multiplyBy12ThenHalve,
    multiplyBySeven,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
    getSecondItem,
    getLastItem,
    getRandomNumber,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should take a string and add return a new string that adds three exclamation points to the argument', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit');

    expect.equal(actual, expected, 'this test takes bunny rabbit and outputs bunny rabbit!!!');

    const expected2 = 'hello world!!!';

    const actual2 = addExclamationPoints('hello world');

    expect.equal(actual2, expected2, 'this test take hello world and outputs hello world!!!');

    const expected3 = 'name!!!';

    const actual3 = addExclamationPoints('name');

    expect.equal(actual3, expected3, 'this test takes name and outputs name!!!');
});

test('this test should take in a number and multiply it by seven', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected, 'this test takes 4 and multiplies it by 7 to get 28');

    const expected2 = 7;

    const actual2 = multiplyBySeven(1);

    expect.equal(actual2, expected2, 'this test takes 1 and multiplies it by 7 to get 7');

    const expected3 = 49;

    const actual3 = multiplyBySeven(7);

    expect.equal(actual3, expected3, 'this test takes 7 and multiplies it by 7 to get 49');
});

test('this test should take in a number and multiply it by twelve then cut the result in half', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected, 'this test takes 4 multiplies it by 12, halves it, and outputs 24');

    const expected2 = 6;

    const actual2 = multiplyBy12ThenHalve(1);

    expect.equal(actual2, expected2, 'this test takes 1, multiplies it by 12, halves it, and outputs 6');

    const expected3 = 18;

    const actual3 = multiplyBy12ThenHalve(3);

    expect.equal(actual3, expected3, 'this test takes 3, multiplies it by 12, halves it, and returns 18');
});

test('this test should take in two number and return a greeting that the sum of those numbers is todays lucky number', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12';

    const actual = makeLuckyGreeting(8, 4);

    expect.equal(actual, expected, 'this test takes the numbers 8 and 4 and outputs Hello! Your lucky number for the day is 12');

    const expected2 = 'Hello! Your lucky number for the day is 2';

    const actual2 = makeLuckyGreeting(1, 1);

    expect.equal(actual2, expected2, 'this test takes the numbers 1 and 1 and outputs Hello! Your lucky number for the day is 2');

    const expected3 = 'Hello! Your lucky number for the day is 14';

    const actual3 = makeLuckyGreeting(7, 7);

    expect.equal(actual3, expected3, 'this test takes the numbers 7 and 7 and outputs Hello! Your lucky number for the day is 14');
});

test('this test should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected, 'this test takes in [8, 4, 5] divides 8 and 4, then multiplies the result by 5 to return 10');

    const expected2 = 9;

    const actual2 = divideThenMultiply(6, 2, 3);

    expect.equal(actual2, expected2, 'this test takes in [6, 2, 3] divides 6 and 2, then multiplies the result by 3 to return 9');

    const expected3 = 40;

    const actual3 = divideThenMultiply(8, 1, 5);

    expect.equal(actual3, expected3, 'this test takes in [8, 1, 5] divides 8 and 1, then multiplies the result by 5 to return 40');
});

test('this test should take in three numbers and return those numbers in an array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected, 'this test takes in 8, 4, 5, and returns [8, 4, 5]');

    const expected2 = [1, 2, 3];

    const actual2 = returnAsAnArray(1, 2, 3);

    expect.deepEqual(actual2, expected2, 'this test takes in 1, 2, 3, and returns [1, 2, 3]');

    const expected3 = [0, 4, 7];

    const actual3 = returnAsAnArray(0, 4, 7);

    expect.deepEqual(actual3, expected3, 'this test takes in 0, 4, 7, and returns [0, 4, 7]');
});

test('this test should take in 3 numbers and return the numbers mushed together as a string', (expect) => {
    const expected = '845';

    const actual = returnAsAString(8, 4, 5);

    expect.deepEqual(actual, expected, 'this test takes in 8, 4, 5 and returns 845');

    const expected2 = '123';

    const actual2 = returnAsAString(1, 2, 3);

    expect.deepEqual(actual2, expected2, 'this test takes in 1, 2, 3 and returns 123');

    const expected3 = '997';

    const actual3 = returnAsAString(9, 9, 7);

    expect.deepEqual(actual3, expected3, 'this test takes in 9, 9, 7 and returns 997');
});

test('this test should take an array and return the second item in the array', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected, 'this test takes in [kiwi, apple, orange, plum] and returns apple');

    const expected2 = 'world';

    const actual2 = getSecondItem(['hello', 'world', 'orange', 'plum']);

    expect.equal(actual2, expected2, 'this test takes in [hello, world, orange, plum] and returns world');

    const expected3 = 'second';

    const actual3 = getSecondItem(['first', 'second', 'orange', 'plum']);

    expect.equal(actual3, expected3, 'this test takes in [first, second, orange, plum] and returns second');
});

test('this test should take an array and return the last item in the array, no matter the arrays length', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected);
});

test('this function should return a random number between 0 and 5', (expect) => {
    const actual = getRandomNumber();

    const expected = [1, 2, 3, 4, 5].includes(actual);

    expect.equal(true, expected);
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

