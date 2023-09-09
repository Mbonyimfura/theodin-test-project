
const caesarCipher=require('../src/caesarCipher')
describe('Caesar Cipher',()=>{
    test('Should shift characters correcttly',()=>{
        expect(caesarCipher('Hello, World!',3)).toBe('Khoor, Zruog!');
        expect(caesarCipher('Abcdef',1)).toBe('Bcdefg');
    });
    test('Should handle wrapping from z to a',()=>{
        expect(caesarCipher('xyz',3)).toBe('abc');
    });
    test('Should keep the same case',()=>{
        expect(caesarCipher('Hello',2)).toBe('Jgnnq');
        expect(caesarCipher('WORLD',5)).toBe('BTWQI');
    })
    test('Should handle non-alphabet characters',()=>{
        expect(caesarCipher('Hello, World!',3)).toBe('Khoor, Zruog!');
        expect(caesarCipher('123 456',4)).toBe('123 456');
    })
})