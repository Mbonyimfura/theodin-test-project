const { default: expect } = require('expect')

const sum=require('./sum')

test('Add 1+2 to equal 3',()=>{
    expect(sum(1,2)).toBe(3);
})