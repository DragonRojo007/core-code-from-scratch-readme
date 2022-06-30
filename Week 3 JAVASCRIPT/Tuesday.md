1.`Simple Pig Latin`
```Javascript
function pigIt(str) {
  let punctuaionMarks = ['!', '?', '.', ',', ':', ';'];
  let words = str.split(' ');
  let firstLetter = '';
  let restOfLetters = '';
  for (let i = 0; i < words.length; i++) {
    if (punctuaionMarks.indexOf(words[i]) >= 0) continue;
    firstLetter = words[i].slice(1);
    restOfLetters = words[i].slice(0,1);
    //replacing the word
    words[i] = firstLetter + restOfLetters + 'ay';
  }
  return words.join(' ');
}
```

2.`Counting Duplicates`
```Javascript
function duplicateCount(text){
  let result = 0;
  let count = 0;
  let chars = text.toLowerCase().split('').sort();
  let actualChar = chars[0];
  for(let i = 0; i <= chars.length; i++){
    if(actualChar !== chars[i]){
      actualChar = chars[i];
      if (count >= 2) result++;
      count = 0;
    }
    count++;
  }
  return result;
}
```

3.`Decode The Morse Code`
```Javascript
decodeMorse = function(morseCode){
  let letter = morseCode.trim().split(' ');
  let word = '';
  let spaceCount = 0;
  const result = letter.map((str) => {
    if(str !== '') word += MORSE_CODE[str];
    if(str === '') spaceCount++;
    if(spaceCount >= 2){
      spaceCount = 0;
      word += ' ';
    }
  });
  return word;
}
```
