
const analyzeArray = require('../src/analyzeArray');

describe('AnalyerArray',()=>{
    test('Should return correct object for valid array',()=>{
      const inputArray=[1,8,3,4,2,6];
      const result=analyzeArray(inputArray);
      expect(result).toEqual({average:4,min:1,max:8,length:6})
    })
    test('Should handle an empty array',()=>{
        const inputArray=[];
        const result=analyzeArray(inputArray);
        expect(result).toEqual({average:NaN,min:undefined,max:undefined,length:0})
    })
})