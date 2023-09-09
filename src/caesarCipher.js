function caesarCipher(inputStr,shift){
    const isUpperCase=(char)=>/^[A-Z]$/.test(char);
    const isLowerCase=(char)=>/^[a-z]$/.test(char);

    function shiftChar(char,shiftAmount,baseCharCode){
        return String.fromCharCode(((char.charCodeAt(0) -baseCharCode + shiftAmount) % 26)+baseCharCode);
    }
    function processCharacter(char){
        if(isUpperCase(char)){
            return shiftChar(char,shift,65);
        }else if(isLowerCase(char)){
            return shiftChar(char,shift,97);
        }else{
            return char
        }
    }
    return inputStr.split('').map((char)=>processCharacter(char)).join('')
}

module.exports=caesarCipher