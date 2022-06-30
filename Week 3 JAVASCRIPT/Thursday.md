2.`Encrypt This!`
```Javascript
var encryptThis = function(text) {
  let ascii;
  let secondLetter;
  let lastLetter;
  const result = text.split(' ').map((str) => {
    if (str.length === 1) return `${str.charCodeAt()}`;
    if (str.length === 2) return `${str[0].charCodeAt()}${str[1]}`;
    secondLetter = str[1];
    lastLetter = str[str.length - 1];
    ascii = str.charCodeAt(0);
    
    str = str.split('');
    str[0] = ascii;
    str[str.length-1] = secondLetter;
    str[1] = lastLetter;
    str= str.join('');
    return str;
  });
  return result.join(' ');
}
```
