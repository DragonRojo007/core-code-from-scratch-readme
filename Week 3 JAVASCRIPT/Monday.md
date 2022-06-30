1.`Who Likes It?`

```Javascript
function likes(names) {
  if (names.length == 0) return "no one likes this";
  if (names.length == 1) return `${names[0]} likes this`;
  if (names.length == 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length == 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}
```

2.`Bit Counting`

```Javascript
var countBits = function (n) {
  let binary = n.toString(2);
  return binary.split('').reduce(
    (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue),0);
};
```

3.`Your order, please`

```Javascript
function order(words) {
  /*Get the number of the word*/
  let wordNumber = [];
  for (let i = 0; i < words.length; i++) {
      //if the value is a number
      if (!Number.isNaN(Number(words[i]))) wordNumber.push(words[i]);
  }

  /*Cleaning whitespaces values fromm wordNumber array*/
  let cleanWordNumber = [];
  for (let i = 0; i < wordNumber.length; i++) {
      if (wordNumber[i] != ' ') cleanWordNumber.push(wordNumber[i]);
  }

  /*Getting the result array*/
  let result = [];
  let wordsArray = words.split(' ');
  for (let i = 0; i < wordsArray.length; i++) {
      result[cleanWordNumber[i]] = wordsArray[i];
  }

  /*Cleaning the undefined values from result array*/
  let cleanresult = [];
  for (let i = 0; i < result.length; i++) {
      if (result[i] != undefined) cleanresult.push(result[i]);
  }
  //return the final string
  return cleanresult.join(' ');
}
```
