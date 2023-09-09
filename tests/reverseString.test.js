
const reverseString=require('../src/reverseString');
const { default: expect } = require('expect');
describe('ReverseString',()=>{
    test('Should reverse a string passed',()=>{
        expect(reverseString('hey')).toEqual('yeh')
    });
    test('Should fail when string passed is not equal to reversed string ',()=>{
        expect(reverseString('tresor')).not.toEqual('tresor')
    })
})