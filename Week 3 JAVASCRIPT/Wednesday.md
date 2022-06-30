1.`Valid Parentheses`
```Javascript
function validParentheses(parens) {
  let counter = 0;  //counter for the parentheses
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') counter++;
    if (parens[i] === ')') counter--;
    //if there is more ')' than '('
    if (counter < 0) return false; 
  }
  //if there is the same amount of '(' as ')'
  //it will return true
  return counter === 0;
}
```

2.`Convert String To Camel Case`
```Javascript
function toCamelCase(str){
  for(let i = 0; i < str.length; i++){
    str = str.replace('-', ' ');
    str = str.replace('_', ' ');
  }
  str = str.split(' ');
  let result = str[0];
  let word = '';
  for(let i = 1; i < str.length; i++){
    word = str[i];
    result += word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  return result;
}
```

3.`Unique In Order`
```Javascript
var uniqueInOrder=function(iterable){
  let result = [];
  let value;  //using undefined to work with every kind of value
  for(let i = 0; i < iterable.length; i++){
    if(value !== iterable[i]){
      result.push(iterable[i]);
      value = iterable[i];
    }
  }
  return result;
}
```
