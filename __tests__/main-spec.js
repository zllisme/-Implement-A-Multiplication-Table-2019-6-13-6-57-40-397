const validator = require('../main');

it ('should return true when call isStartLessThanEnd given 2 and 4', () => {
    expect(validator.isStartLessThanEnd(2, 4)).toBe(true);
});

it ('should return false when call isStartLessThanEnd given 5 and 3', () => {
    expect(validator.isStartLessThanEnd(5, 3)).toBe(false);
});

it ('should return true when call isStartLessThanEnd given 4 and 4', () => {
    expect(validator.isStartLessThanEnd(4, 4)).toBe(true);
});

it ('should return true when call isInputInRange given 2 and 4', () => {
    expect(validator.isInputInRange(2, 4)).toBe(true);
});

it ('should return false when the end out of range given 2 and 1002', () => {
    expect(validator.isInputInRange(2, 1002)).toBe(false);
});

it ('should return false when the end out of range given -1 and 5', () => {
    expect(validator.isInputInRange(-1, 5)).toBe(false);
});

it ('should return false when the start out of range given 1005 and 4', () => {
    expect(validator.isInputInRange(1005,4)).toBe(false);
});

var result = "2X2=4 \n2X3=6 3X3=9 \n2X4=8 3X4=12 4X4=16 \n";
 it ('should return multiply range 2 to 4 when call create multiply table given 2 and 4', () => {
     expect(validator.createMultiplyTable(2, 4)).toBe(result);
 });

it ('should return out of range when call create multiply table given 2 and 1001', () => {
    expect(validator.createMultiplyTable(2, 1001)).toBe("out of range");
});

it ('should return null when call create multiply table given 500 and 5', () => {
    expect(validator.createMultiplyTable(500, 5)).toBe(null);
});


