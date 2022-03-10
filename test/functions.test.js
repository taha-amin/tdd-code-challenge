// IMPORT MODULES under test here:
import { 
    multiplyBySeven,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should take in a number and multiply it by seven', (expect) => {
    const expected = true;

    const actual = multiplyBySeven();

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

