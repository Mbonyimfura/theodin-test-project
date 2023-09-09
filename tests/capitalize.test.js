
const capitalize=require('../src/capitalize');
const { default: expect } = require('expect');

test('Should capitalize first character of string',()=>{
    expect(capitalize('tresor')).toEqual('Tresor')
    expect(capitalize('hey')).toBe('Hey')
})