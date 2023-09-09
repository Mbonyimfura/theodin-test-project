
const { default: expect } = require('expect');
const calculator=require('../src/calculator')

describe('Calculator',()=>{
    test('Add two number 5+3 to equal to 8',()=>{
        expect(calculator.sum(5,3)).toBe(8)
    });
    test('Subtract 5-3 to be 2',()=>{
        expect(calculator.subtract(5,3)).toBe(2)
    });
    test('Multiply 5*3 to be 15',()=>{
        expect(calculator.multiply(5,3)).toBe(15)
    });
    test('Divide 6/3 to be 2',()=>{
        expect(calculator.divide(6,3)).toBe(2)
    });
    test('Divide number by 0 should throw an error', () => {
      expect(()=>calculator.divide(5,0)).toThrow('Error: Division by zero is impossible')
      });
})
