1. `Remove All Exclamation Marks From The End Of Sentence`

```Javascript
function remove(str) {
  let newStr = '';
  for (let i = str.length - 1; i > 0; i--) {
    if (str[i] !== '!') {
      newStr = str.substring(0, i + 1);
      break;

    }
  }
  return newStr;
}
```

2. `Vowel Remover`

```Javascript
function shortcut (string) {
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  let newStr = '';
  let found;
  for(let i = 0; i < string.length; i++){
    found = false;
    for(let j = 0; j < vowel.length; j++){
      if(string[i] === vowel[j]){t 
        found = true;
        break;
      } 
    }
    if(found === true) continue;
    newStr += string[i];
  }
  return newStr;
}
```

3. `Rock Paper Scissors!`

```Javascript
const rps = (p1, p2) => {
  if(p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!';
  if(p1 === 'paper' && p2 === 'rock') return 'Player 1 won!';
  if(p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!';
  if(p1 === p2) return 'Draw!';
  return 'Player 2 won!';
};
```

4. `Persistent Bugger`

```Javascript
function persistence(num) {
  let count = 0;
  let digit = [];
  while(num >= 10){
    digit = num.toString().split('');
    num = 1; 
    for(let i = 0; i < digit.length; i++){
      num *= digit[i];
    }
    count++;
  }
  return count;
} 
```
