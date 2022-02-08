const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  arr1 = expr.split('**********')
  words = ''
  for (i in arr1){
    word = []
    nowArr = arr1[i].split('')
    while(nowArr.length>0){
      nowLetter = ''
      letter = nowArr.splice(0,10)
      while (letter[0]=='0') letter.shift()
      while (letter.length>0){
        sign = letter.splice(0,2).join('')
        if (sign==='10') nowLetter+='.'
        else nowLetter+='-'}
        word.push(MORSE_TABLE[nowLetter])
    }
    words+=word.join('')+' '
  }
  return words - ' '
}

module.exports = {
    decode
}
